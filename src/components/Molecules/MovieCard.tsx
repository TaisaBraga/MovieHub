interface ImovieTitle {
  movieTitle: string;
  movieImage: string;
}

export default function MovieCard({
  movieTitle,
  movieImage,
}: ImovieTitle) {
  return (
    <div className="group bg-slate-500">
      <a href="./Details">
        <img
          className="max-w-[11em] max-h-[17em] cursor-pointer transition group-hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movieImage}`}
          alt={`Movie Image - ${movieTitle}`}
        />
      </a>
    </div>
  );
}
