import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Molecules/Loader";
import {
  useGetMoviesContext,
  type IMovie,
} from "../../Context/useGetMoviesContext";
import ErrorPage from "../Molecules/ErrorPage";
import MovieDetails from "../Organisms/MovieDetails";

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsListError, isListError, isFetchError, setIsFetchError } =
    useGetMoviesContext();

  useEffect(() => {
    if (!id) return;

    const token = import.meta.env.VITE_TMDB_TOKEN;

    setIsLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar detalhes:", err);
        setIsFetchError(true);
        setIsListError(err);
        setIsLoading(false);
      });
  }, [id, setIsListError, setIsFetchError]);

  if (isFetchError)
    return (
      <ErrorPage
        errorCode={isListError}
        errorMessage="The page you are trying to access does not exist."
      />
    );

  if (isLoading) return <Loader />;

  return (
    <MovieDetails
      title={movie?.title}
      releaseDate={movie?.release_date || ""}
      popularity={movie?.vote_average.toFixed(1)}
      overview={movie?.overview}
      image={movie?.backdrop_path}
    />
  );
}
