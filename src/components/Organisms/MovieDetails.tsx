import { format, parseISO } from "date-fns";

interface IMovieDetailsProps {
  title?: string;
  overview?: string;
  image?: string;
  releaseDate: string | "";
  popularity?: string;
}

export default function MovieDetails({
  title,
  overview,
  image,
  releaseDate,
  popularity,
}: IMovieDetailsProps) {
  return (
    <div className="flex justify-center items-center flex-wrap p-7 text-orange-100">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={`Movie Image - ${title}`}
          className="p-5"
        />
        <div className="font-literata flex justify-around">
          <p>{format(parseISO(releaseDate), "dd/MM/yyyy")}</p>
          <p>{popularity}</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap font-literata">
        <h1 className="text-[27px] font-bold m-4">{title}</h1>
        <p className="text-justify py-0 px-[160px] text-[18px]">{overview}</p>
      </div>
    </div>
  );
}
