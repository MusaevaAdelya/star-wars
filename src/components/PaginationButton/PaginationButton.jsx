import { Link } from "react-router-dom";
import extractNumberFromUrl from "../../services/extractNumberFromUrl";

function PaginationButton({children, to, url}) {
  const pageNum=extractNumberFromUrl(url);
  return (
    <Link
      to={pageNum?`${to}?page=${pageNum}`:`#`}
      className={`px-5 py-2 font-semibold text-center capitalize transition-colors duration-300 ease-in-out border-2  hover:text-black hover:bg-white 
      min-w-[148px] ${
        pageNum
          ? "border-zinc-100 text-zinc-100"
          : "disabled-link border-zinc-500 text-zinc-500"
      }`}
    >
      {children}
    </Link>
  );
}

export default PaginationButton;
