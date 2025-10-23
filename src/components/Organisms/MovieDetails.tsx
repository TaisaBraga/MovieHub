import { format, parseISO } from "date-fns";
import BackPageButton from "../Molecules/BackPageButton";

interface IMovieDetailsProps {
  title?: string;
  overview?: string;
  image?: string;
  releaseDate: string | "";
  popularity?: string;
  genre?: string;
  handleSetWatchList: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void
}

export default function MovieDetails({
  title,
  overview,
  image,
  releaseDate,
  popularity,
  genre,
  handleSetWatchList,
}: IMovieDetailsProps) {

  return (
    <div>
      <BackPageButton />
      <div className="flex justify-center p-10 text-orange-100 font-literata">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={`Movie Image - ${title}`}
        />
        <div className="ml-8">
          <h1 className="text-[27px] font-bold">{title}</h1>
          <div className="flex flex-wrap gap-3 mb-10 mt-3 items-center">
            <p>{format(parseISO(releaseDate), "yyyy")}</p>
            <span>•</span>
            <p>{genre}</p>
            <span>•</span>
            <p>{popularity}</p>
          </div>
          <p className="text-justify text-[17px] pr-8">{overview}</p>
          <button onClick={(id) => handleSetWatchList(id)} className="bg-slate-800 rounded-xl items-center mt-10 self-start py-1 px-3">
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
