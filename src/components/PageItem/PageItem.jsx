import { Link } from "react-router-dom";

import { useState } from "react";

function PageItem({ title, image, color, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={link}>
      <div
        className={
          "relative overflow-hidden h-96 lg:h-[35rem] flex flex-col justify-end pb-10 max-w-[1200px] mx-auto"
        }
        style={{
          boxShadow: isHovered ? `0 0 50px 15px ${color}` : "none",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2"
          src={image}
          alt={title}
        />
        <div
          className="py-3 text-3xl font-black tracking-wide text-center uppercase md:text-4xl bg-black/70"
          style={{ color: color }}
        >
          {title}
        </div>
      </div>
    </Link>
  );
}

export default PageItem;
