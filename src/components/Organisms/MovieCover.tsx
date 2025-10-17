import { useGetMoviesContext } from "../../Context/useGetMoviesContext";
import MovieCard from "../Molecules/MovieCard";

export default function MovieCover() {
  const { isMovieList } = useGetMoviesContext();
  const movie = isMovieList[0];

  return (
    <div className="relative w-screen h-[80vh] overflow-hidden">
      <MovieCard className="w-full h-full object-cover object-center cursor-pointer" movieTitle={movie?.title} movieImage={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} />
    </div>
  );
}
