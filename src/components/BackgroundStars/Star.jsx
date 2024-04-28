import { useState, useEffect } from "react";
import getRandomNum from "../../services/getRandomNum";

function Star({ size, rgbaColor, x, y }) {
  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    const intervalDuration = getRandomNum(400, 1000); 
    const intervalId = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="absolute rounded-full -z-10"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: rgbaColor,
        top: `${y}%`,
        left: `${x}%`,
        boxShadow: showShadow ? `0 0 ${size*5}px ${size}px ${rgbaColor}` : "none",
      }}
    ></div>
  );
}

export default Star;
