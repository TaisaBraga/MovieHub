/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface IGetMoviesProps {
  isMovieList: boolean;
  setIsMovieList: Dispatch<SetStateAction<boolean>>;
}

export const UseGetMoviesContext = createContext<IGetMoviesProps>(
  {} as unknown as IGetMoviesProps
);

export const useGetMoviesContext = () =>
  useContext<IGetMoviesProps>(UseGetMoviesContext);

export const GetMoviesProvider = ({ children }: React.PropsWithChildren) => {
  const [isMovieList, setIsMovieList] = useState(false);

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
