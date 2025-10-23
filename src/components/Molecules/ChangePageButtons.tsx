
interface IChangePageButtonsProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  prevClassButton: string;
  disabled: boolean
}

export default function ChangePageButtons({
  handleNextPage,
  handlePreviousPage,
  prevClassButton,
  disabled
}: IChangePageButtonsProps) {

  return (
    <div className="flex justify-between m-6 font-literata ">
      <button
        onClick={handlePreviousPage}
        disabled={disabled}
        className={prevClassButton}
      >
        Previous Page
      </button>
      <button onClick={handleNextPage} className="text-[#E96900]">
        Next Page
      </button>
    </div>
  );
}
