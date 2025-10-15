import movieHubLogo from "../../assets/MovieHub-logo.svg";

export default function NavigateLinks() {
  return (
    <div className="flex justify-between p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <img className="cursor-pointer" src={movieHubLogo} alt="MovieHub-logo" />
      <div className="flex text-yellow-100 gap-3 justify-items-end place-self-center">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">WatchList</p>
      </div>
    </div>
  );
}
