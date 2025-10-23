import { useGetMoviesContext } from "../../Context/useGetMoviesContext";
import ChangePageButtons from "../Molecules/ChangePageButtons";
import ErrorPage from "../Molecules/ErrorPage";
import Loader from "../Molecules/Loader";
import MovieCover from "../Organisms/MovieCover";
import MovieList from "../Organisms/MovieList";

export default function MovieHomePage() {
  const {
    isMovieList,
    isFetchError,
    isListError,
    handleSetNextPage,
    handleSetPreviousPage,
    isPageChangeDisabled,
  } = useGetMoviesContext();

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
      <ChangePageButtons
        disabled={isPageChangeDisabled}
        prevClassButton={`${
          isPageChangeDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-[#E96900]"
        }`}
        handleNextPage={handleSetNextPage}
        handlePreviousPage={handleSetPreviousPage}
      />
    </>
  );
}
