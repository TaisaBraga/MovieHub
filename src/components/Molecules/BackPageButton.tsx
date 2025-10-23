import angleLeft from "../../assets/angle-left.svg"

export default function BackPageButton() {
  return (
    <div className="rounded-2xl w-9 h-8 flex items-center justify-center m-5">
        <a href="../">
        <img src={angleLeft} alt="Back Page button" />
        </a>
    </div>
  )
}
