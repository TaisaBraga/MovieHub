import { useGetMoviesContext } from "../../Context/useGetMoviesContext";
import ErrorPage from "../Molecules/ErrorPage";
import Loader from "../Molecules/Loader";
import MovieCover from "../Organisms/MovieCover";
import MovieList from "../Organisms/MovieList";

export default function MovieHomePage() {
  const { isMovieList, isFetchError, isListError } = useGetMoviesContext();

  if (isFetchError)
    return (
      <ErrorPage
        errorCode={isListError}
        errorMessage="The page you are trying to access does not exist."
      />
    );
  if (!isMovieList.length) return <Loader />;

  return (
    <>
      <MovieCover />
      <MovieList />
    </>
  );
}
