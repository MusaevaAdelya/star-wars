import InfoCard from "../../components/InfoCard";
import { useParams } from "react-router-dom";

function Starship() {

  const { id } = useParams();

  return (
    <div>
      <InfoCard
        title="R2-D2"
        avatar={{
          size: "16rem",
          variant: "bauhaus",
          colors: ["#1C31A5", "#101F78", "#020F59", "#010937", "#000524"],
        }}
        info={{height:"96", mass:32, hairColor:"n/a", eyeColor:"red",birthYear:"33BBY",gender:"n/a"}}
      />
    </div>
  );
}

export default Starship;
