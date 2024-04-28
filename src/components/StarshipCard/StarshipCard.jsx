import { Link } from "react-router-dom";
import Avatar from "boring-avatars";

function StarshipCard({to, data}) {
    return (<Link
    to={to}
    className="bg-zinc-100 w-[150px] rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-[0_0_50px_15px_#1C31A5] transition-all duration-300"
  >
    <Avatar
      size={150}
      name={data.fields.starship_class}
      variant="bauhaus"
      square={true}
      colors={[
        "#1C31A5",
        "#101F78",
        "#020F59",
        "#010937",
        "#000524"
      ]}
    />
    <p className="px-1 py-2 text-xl font-medium text-center font-primary">
      {data.fields.starship_class}
    </p>
  </Link>)
  }

export default StarshipCard
