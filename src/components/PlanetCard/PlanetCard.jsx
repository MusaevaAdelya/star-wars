import { Link } from "react-router-dom";
import Avatar from "boring-avatars";

function PlanetCard({to, data}) {
    return (<Link
    to={to}
    className="bg-zinc-100 w-[150px] rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-[0_0_50px_15px_#C8A2C8] transition-all duration-300"
  >
    <Avatar
      size={150}
      name={data.fields.name}
      variant="ring"
      square={true}
      colors={[
        "#E6E6FA",
        "#DCD0FF",
        "#D8BFD8",
        "#C8A2C8",
        "#B0A4E3"
      ]}
    />
    <p className="px-1 py-2 text-xl font-medium text-center font-primary">
      {data.fields.name}
    </p>
  </Link>)
  }

export default PlanetCard;
