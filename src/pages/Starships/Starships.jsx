import GoBackButton from "../../components/GoBackButton";
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import {
  setData,
  setIsError,
  setIsLoading,
  getIsLoading,
  getIsError,
  getStarships,
} from "../../store/starships/starshipsSlice";
import { useSelector } from "react-redux";
import CardsSkeleton from "../../components/CardsSkeleton";
import { useNavigate, useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import extractNumberFromUrl from "../../services/extractNumberFromUrl";
import useGetReduxData from "../../hooks/useGetReduxData";
import StarshipCard from "../../components/StarshipCard";
import { useEffect } from "react";

function Starships() {
  const data = useSelector(getStarships);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useGetReduxData(
    `${process.env.REACT_APP_BASE_URL}/starships?page=${page ? page : 1}`,
    setIsLoading,
    setData,
    setIsError
  );

  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError, navigate]);

  return (
    <div>
      <div className="space-y-10">
        <GoBackButton to="/" />
        <div className="flex justify-center gap-8 text-2xl ">
          <PaginationButton to={"/starships"} url={data?.previous}>
            previous
          </PaginationButton>
          <PaginationButton to={"/starships"} url={data?.next}>
            next
          </PaginationButton>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-16 gap-x-28 gap-y-20">
        {isLoading ? (
          <CardsSkeleton qty={10} />
        ) : (
          <>
            {data &&
              data.results.map((starship) => (
                <StarshipCard
                  to={`${extractNumberFromUrl(starship.fields.url)}`}
                  data={starship}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Starships;
