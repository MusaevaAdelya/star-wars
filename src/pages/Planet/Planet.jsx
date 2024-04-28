import InfoCard from "../../components/InfoCard";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import GoBackButton from "../../components/GoBackButton";
import { useEffect } from "react";
import InfoCardSkeleton from "../../components/InfoCardSkeleton/InfoCardSkeleton";

function Planet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetData(
    `${process.env.REACT_APP_BASE_URL}/planets/${id ? id : 1}`
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
        {isLoading && <InfoCardSkeleton />}

        {!isLoading && !isError && data && (
          <InfoCard
            title={data.fields.name}
            avatar={{
              size: "16rem",
              variant: "ring",
              colors: ["#E6E6FA", "#DCD0FF", "#D8BFD8", "#C8A2C8", "#B0A4E3"],
            }}
            info={{
              name: data.fields.name,
              climate: data.fields.climate,
              surfaceWater:data.fields.surface_water,
              diameter:data.fields.diameter,
              rotationPeriod:data.fields.rotation_period,
              terrain:data.fields.terrain,
              gravity:data.fields.gravity,
              orbitalPeriod:data.fields.orbital_period,
              population:data.fields.population
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Planet;
