import { useNavigate } from "react-router-dom";
import angleLeft from "../../assets/angle-left.svg";

export default function BackPageButton() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="rounded-2xl w-9 h-8 flex items-center justify-center m-5 cursor-pointer"
    >
      <img src={angleLeft} alt="Back Page button" />
    </div>
  );
}
