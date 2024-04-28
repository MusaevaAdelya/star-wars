import Star from "./Star";
import getRandomNum from "../../services/getRandomNum";
import { memo } from "react";

const BackgroundStars = memo(({ qty }) => {
  return (
    <>
      {Array.from({ length: qty }).map((_, index) => (
        <Star
          key={index}
          size={getRandomNum(1, 5)}
          rgbaColor={`rgba(255,255,255,0.${getRandomNum(1, 9)})`}
          x={getRandomNum(0, 100)}
          y={getRandomNum(0, 100)}
        />
      ))}
    </>
  );
});

export default BackgroundStars;
