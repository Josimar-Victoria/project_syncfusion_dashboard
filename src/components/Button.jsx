import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  path
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <Link to={path} className={`text-${bgColor} hover:underline focus:outline-none focus:underline`}>
      <button
        type="button"
        onClick={() => setIsClicked(initialState)}
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      >
        {icon} {text}
      </button>
    </Link>
  );
};

export default Button;
