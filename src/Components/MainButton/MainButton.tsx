import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.scss";
interface IProps {
  text: string;
  type?: "Default" | "Secondary";
  Icon?: React.ElementType;
  onclick?(): void;
  loading?: boolean;
}
export default ({
  text,
  type = "Default",
  Icon,
  loading = false,
  onclick = () => {},
}: IProps) => {
  const [loadingState, setloading] = useState(loading);
  useEffect(() => {
    setloading(loading);
  }, [loading]);
  return (
    <div
      onClick={() => {
        onclick();
      }}
      className="ButtonParent"
    >
      <button
        className={type == "Default" ? "MainButton" : "MainButtonSecondary"}
        disabled={loadingState}
      >
        {loadingState ? <CircularProgress color="secondary" /> : text}
        {Icon && !loadingState ? <Icon style={{ marginLeft: "20px" }} /> : ""}
      </button>
    </div>
  );
};
