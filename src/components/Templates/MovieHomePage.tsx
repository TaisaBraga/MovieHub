import { useGetMoviesContext } from "../../Context/useGetMoviesContext";
import Loader from "../Molecules/Loader";
import MovieCover from "../Organisms/MovieCover";
import MovieList from "../Organisms/MovieList";

export default function MovieHomePage() {
  const { isMovieList } = useGetMoviesContext();

  if (!isMovieList.length) return <Loader />;

  return (
    <>
      <MovieCover />
      <MovieList />
    </>
  );
}
