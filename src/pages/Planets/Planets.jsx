import GoBackButton from "../../components/GoBackButton";
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import {
  setData,
  setIsError,
  setIsLoading,
  getPlanets,
  getIsLoading,
  getIsError,
} from "../../store/planets/planetsSlice";
import { useSelector } from "react-redux";
import CardsSkeleton from "../../components/CardsSkeleton";
import { useNavigate, useSearchParams } from "react-router-dom";
import extractNumberFromUrl from "../../services/extractNumberFromUrl";
import useGetReduxData from "../../hooks/useGetReduxData";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import { useEffect } from "react";

function Planets() {
  const data = useSelector(getPlanets);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useGetReduxData(
    `${process.env.REACT_APP_BASE_URL}/planets?page=${page ? page : 1}`,
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
          <PaginationButton to={"/planets"} url={data?.previous}>
            previous
          </PaginationButton>
          <PaginationButton to={"/planets"} url={data?.next}>
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
              data.results.map((planet) => (
                <PlanetCard
                  to={`${extractNumberFromUrl(planet.fields.url)}`}
                  data={planet}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Planets;
