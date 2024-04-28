import { Link } from "react-router-dom";
import Avatar from "boring-avatars";

function CharacterCard({to, data}) {
  return (<Link
  to={to}
  className="bg-zinc-100 max-w-[150px] rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-[0_0_50px_15px_rgba(255,197,0)] transition-all duration-300"
>
  <Avatar
    size={150}
    name={data.fields.name}
    variant="beam"
    square={true}
    colors={["#FFFF00", "#FFD700", "#FFEB3B", "#FBC02D", "#FFA000"]}
  />
  <p className="px-1 py-2 text-xl font-medium text-center font-primary">
    {data.fields.name}
  </p>
</Link>)
}

export default CharacterCard;
