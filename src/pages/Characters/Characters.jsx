import GoBackButton from "../../components/GoBackButton";
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import {
  setData,
  setIsError,
  setIsLoading,
  getCharacters,
  getIsLoading,
  getIsError,
} from "../../store/characters/charactersSlice";
import { useSelector } from "react-redux";
import CardsSkeleton from "../../components/CardsSkeleton";
import { useNavigate, useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import extractNumberFromUrl from "../../services/extractNumberFromUrl";
import useGetReduxData from "../../hooks/useGetReduxData";

function Characters() {
  const data = useSelector(getCharacters);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useGetReduxData(
    `${process.env.REACT_APP_BASE_URL}/people?page=${page ? page : 1}`,
    setIsLoading,
    setData,
    setIsError
  );

  if (isError) {
    navigate("/error");
  }

  return (
    <div>
      <div className="space-y-10">
        <GoBackButton to="/" />
        <div className="flex justify-center gap-8 text-2xl ">
          <PaginationButton to={"/characters"} url={data?.previous}>
            previous
          </PaginationButton>
          <PaginationButton to={"/characters"} url={data?.next}>
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
              data.results.map((character) => (
                <CharacterCard
                  to={`${extractNumberFromUrl(character.fields.url)}`}
                  data={character}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Characters;
