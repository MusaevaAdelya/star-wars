import InfoCard from "../../components/InfoCard";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import GoBackButton from "../../components/GoBackButton";
import { useEffect } from "react";
import InfoCardSkeleton from "../../components/InfoCardSkeleton/InfoCardSkeleton";

function Character() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetData(
    `${process.env.REACT_APP_BASE_URL}/people/${id ? id : 1}`
  );

  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError, navigate]);

  return (
    <div>
      <GoBackButton />

      <div className="flex flex-col items-center justify-center">
        {isLoading && <InfoCardSkeleton />}

        {!isLoading && !isError && data && (
          <InfoCard
            title={data.fields.name}
            avatar={{
              size: "16rem",
              variant: "ring",
              colors: ["#FFFF00", "#FFD700", "#FFEB3B", "#FBC02D", "#FFA000"],
            }}
            info={{
              name: data.fields.name,
              gender:data.fields.gender,
              skinColor:data.fields.skin_color,
              hairColor:data.fields.hair_color,
              height:data.fields.height,
              eyeColor:data.fields.eye_color,
              mass:data.fields.mass,
              birthYear:data.fields.birth_year
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Character;
