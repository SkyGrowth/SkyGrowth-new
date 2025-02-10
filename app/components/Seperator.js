import React from "react";

const Separator = ({ orientation = "horizontal", thickness = "1px", color = "gray-300", className = "" }) => {
  return (
    <div
      className={`bg-${color} ${orientation === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]"} ${className}`}
      style={{
        height: orientation === "horizontal" ? thickness : "100%",
        width: orientation === "vertical" ? thickness : "100%",
      }}
    />
  );
};

export default Separator;