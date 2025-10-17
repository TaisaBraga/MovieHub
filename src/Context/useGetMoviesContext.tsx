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
  vote_count: number
}

export interface IGetMoviesProps {
  isMovieList: IMovie[];
  setIsMovieList: Dispatch<SetStateAction<IMovie[]>>;
}

export const UseGetMoviesContext = createContext<IGetMoviesProps>(
  {} as unknown as IGetMoviesProps
);

export const useGetMoviesContext = () =>
  useContext<IGetMoviesProps>(UseGetMoviesContext);

export const GetMoviesProvider = ({ children }: React.PropsWithChildren) => {
  const [isMovieList, setIsMovieList] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
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

        const data = await res.json();
        console.log(data);
        setIsMovieList(data?.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  const value = useMemo(
    () => ({
      isMovieList,
      setIsMovieList,
    }),
    [isMovieList, setIsMovieList]
  );

  return (
    <UseGetMoviesContext.Provider value={value}>
      {children}
    </UseGetMoviesContext.Provider>
  );
};
