/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genreIds: number[];
  genres: { id: number; name: string }[];
}

export interface IGetMoviesProps {
  isMovieList: IMovie[];
  setIsMovieList: Dispatch<SetStateAction<IMovie[]>>;

  isListError: string;
  setIsListError: Dispatch<SetStateAction<string>>;

  isFetchError: boolean;
  setIsFetchError: Dispatch<SetStateAction<boolean>>;

  isPage: number;
  setIsPage: Dispatch<SetStateAction<number>>;

  handleSetNextPage: () => void;
  handleSetPreviousPage: () => void;

  isPageChangeDisabled: boolean;
  setIsPageChangeDisabled: Dispatch<SetStateAction<boolean>>;
}

export const UseGetMoviesContext = createContext<IGetMoviesProps>(
  {} as unknown as IGetMoviesProps
);

export const useGetMoviesContext = () =>
  useContext<IGetMoviesProps>(UseGetMoviesContext);

export const GetMoviesProvider = ({ children }: React.PropsWithChildren) => {
  const [isMovieList, setIsMovieList] = useState<IMovie[]>([]);
  const [isListError, setIsListError] = useState("");
  const [isFetchError, setIsFetchError] = useState(false);
  const [isPage, setIsPage] = useState(1);
  const [isPageChangeDisabled, setIsPageChangeDisabled] = useState(true);

  const baseURL = "https://api.themoviedb.org/3/";

  const fetchMovies = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const token = import.meta.env.VITE_TMDB_TOKEN;
      const res = await fetch(
        `${baseURL}movie/popular?language=en-US&page=${isPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );

      if (!res.ok) {
        setIsFetchError(true);
        throw new Error(`${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setIsMovieList(data?.results);
    } catch (error) {
      const errorMessage = `${error}`;
      setIsFetchError(true);
      setIsListError(errorMessage);
    }
  }, [isPage]);

  useEffect(() => {
    fetchMovies();
  }, [isPage]);

  const handleSetNextPage = useCallback(() => {
    setIsPage((prev) => prev + 1);
  }, []);

  const handleSetPreviousPage = useCallback(() => {
    setIsPage((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (isPage == 1) {
      setIsPageChangeDisabled(true);
    } else setIsPageChangeDisabled(false);
  }, [isPage]);

  const value = useMemo(
    () => ({
      isMovieList,
      setIsMovieList,
      isListError,
      setIsListError,
      isFetchError,
      setIsFetchError,
      isPage,
      setIsPage,
      handleSetNextPage,
      handleSetPreviousPage,
      isPageChangeDisabled,
      setIsPageChangeDisabled,
    }),
    [
      isMovieList,
      setIsMovieList,
      isListError,
      setIsListError,
      isFetchError,
      setIsFetchError,
      isPage,
      setIsPage,
      handleSetNextPage,
      handleSetPreviousPage,
      isPageChangeDisabled,
    ]
  );

  return (
    <UseGetMoviesContext.Provider value={value}>
      {children}
    </UseGetMoviesContext.Provider>
  );
};
