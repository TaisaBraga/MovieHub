/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
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
}

export interface IGetMoviesProps {
  isMovieList: IMovie[];
  setIsMovieList: Dispatch<SetStateAction<IMovie[]>>;

  isListError: string;
  setIsListError: Dispatch<SetStateAction<string>>;

  isFetchError: boolean;
  setIsFetchError: Dispatch<SetStateAction<boolean>>;
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

  useEffect(() => {
    const fetchMovies = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // simula 2s de espera
      try {
        const token = import.meta.env.VITE_TMDB_TOKEN;
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
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
    };

    fetchMovies();
  }, []);
  const value = useMemo(
    () => ({
      isMovieList,
      setIsMovieList,
      isListError,
      setIsListError,
      isFetchError,
      setIsFetchError,
    }),
    [
      isMovieList,
      setIsMovieList,
      isListError,
      setIsListError,
      isFetchError,
      setIsFetchError,
    ]
  );

  return (
    <UseGetMoviesContext.Provider value={value}>
      {children}
    </UseGetMoviesContext.Provider>
  );
};
