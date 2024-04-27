import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
function GoBackButton({to}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 text-2xl text-primary">
      <ChevronLeftIcon className="w-auto h-14" />
      <button
        className="capitalize transition duration-300 ease-in-out hover:underline underline-offset-8"
        onClick={() => to?navigate(to): navigate(-1)}
      >
        go back
      </button>
    </div>
  );
}

export default GoBackButton;
