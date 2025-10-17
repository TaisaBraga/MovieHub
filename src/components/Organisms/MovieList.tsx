import { useGetMoviesContext } from "../../Context/useGetMoviesContext";
import MovieCard from "../Molecules/MovieCard";

export default function MovieList() {
  const { isMovieList } = useGetMoviesContext();

  return (
    <div className="flex flex-wrap items-center justify-center m-6 gap-4">
      {isMovieList.map((movie) => (
        <div key={movie?.id}>
          <MovieCard
            className="max-w-[11em] max-h-[17em] cursor-pointer transition group-hover:scale-105"
            movieTitle={movie?.title}
            movieImage={movie?.poster_path}
          />
        </div>
      ))}
    </div>
  );
}
