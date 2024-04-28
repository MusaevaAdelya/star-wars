import InfoCard from "../../components/InfoCard";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import GoBackButton from "../../components/GoBackButton";
import { useEffect } from "react";
import InfoCardSkeleton from "../../components/InfoCardSkeleton/InfoCardSkeleton";

function Starship() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetData(
    `${process.env.REACT_APP_BASE_URL}/starships/${id ? id : 1}`
  );

  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError, navigate]);

  return (
    <div>
      <GoBackButton />

      <div className="flex flex-col items-center justify-center mt-10">
        {isLoading && <InfoCardSkeleton/>}

        {!isLoading && !isError && data && (
        <InfoCard
          title={data.fields.starship_class}
          avatar={{
            size: "16rem",
            variant: "bauhaus",
            colors: ["#1C31A5", "#101F78", "#020F59", "#010937", "#000524"],
          }}
          info={{
            MGLT: data.fields.MGLT,
            starshipClass: data.fields.starship_class,
            hyperdriveRating: data.fields.hyperdrive_rating,
          }}
        />
      )}
      </div>
    </div>
  );
}

export default Starship;
