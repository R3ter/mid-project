import React from "react";
import "./style.scss";
interface IProps {
  text: string;
  type?: "Default" | "Secondary";
  Icon?: React.ElementType;
  onclick?(): void;
}
export default ({
  text,
  type = "Default",
  Icon,
  onclick = () => {},
}: IProps) => {
  return (
    <div
      onClick={() => {
        onclick();
      }}
      className="ButtonParent"
    >
      <button
        className={type == "Default" ? "MainButton" : "MainButtonSecondary"}
      >
        {text}
        {Icon ? <Icon /> : ""}
      </button>
    </div>
  );
};
