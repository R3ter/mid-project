import React from "react";
import "./style.scss";
interface IProps {
  text: string;
  type?: "Default" | "Secondary";
  Icon?: React.ElementType;
}
export default ({ text, type = "Default", Icon }: IProps) => {
  return (
    <div className="ButtonParent">
      <button
        className={type == "Default" ? "MainButton" : "MainButtonSecondary"}
      >
        {text}
        {Icon ? <Icon /> : ""}
      </button>
    </div>
  );
};
