import Avatar from "boring-avatars";
import formatKey from "../../services/formatKey";
import GoBackButton from "../GoBackButton";

function InfoCard({ title, avatar, info }) {
  return (
    <>
      <div>
        <p className="inline-block px-4 py-2 font-semibold bg-[#A463B9] rounded-bl-none text-slate-100">
          {title}
        </p>
        <div className="p-4 border-[#A463B9] border-l-[5px] space-y-5">
          <Avatar
            size={avatar.size}
            name={title}
            variant={avatar.variant}
            colors={avatar.colors}
            square={true}
          />
          <div className="p-5 space-y-2 bg-black/70 text-slate-200 max-w-[16rem]">
            {Object.entries(info).map(([key, value]) => (
              <p key={key}>
                <span className="underline">{formatKey(key)}</span>:{" "}
                <span>{value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
