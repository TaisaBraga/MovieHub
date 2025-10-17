interface ImovieTitle {
  movieTitle: string;
  movieImage: string;
  className: string
}

export default function MovieCard({
  movieTitle,
  movieImage,
  className,
}: ImovieTitle) {
  return (
    <div className="group">
      <a href="./Details">
        <img
          className={className}
          src={`https://image.tmdb.org/t/p/w500${movieImage}`}
          alt={`Movie Image - ${movieTitle}`}
        />
      </a>
    </div>
  );
}
