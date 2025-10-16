import movieHubLogo from "../../assets/MovieHub-logo.svg";

export default function NavigateLinks() {
  return (
    <div className="flex justify-between p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 sticky top-0 z-50 mb-4">
      <a href="./">
        <img
          className="cursor-pointer"
          src={movieHubLogo}
          alt="MovieHub-logo"
        />
      </a>
      <div className="flex text-orange-100 gap-4 justify-items-end place-self-center font-literata text-[17px]">
        <a className="cursor-pointer decotation-none" href="./">
          Home
        </a>
        <a className="cursor-pointer decotation-none" href="./Watchlist">
          WatchList
        </a>
      </div>
    </div>
  );
}
