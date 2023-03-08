import { Button } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

interface IProps {
  time: { 0: { from: string; to: string } };
  onSelect(arg: string): void;
  reservedTimes: any;
  date: any;
}
export default ({ time, onSelect = () => {}, reservedTimes, date }: IProps) => {
  const selected = useRef("");
  const [selectedIndex, setIndex] = useState("");
  reservedTimes;
  useEffect(() => {
    date;
    setIndex("");
    selected.current = "";
  }, [date, time]);
  return (
    <div
      style={{
        display: "flex",
        margin: 30,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(time).length === 0 ? (
        <h3 style={{ margin: "10px", color: "black" }}>
          there are no availabilities on selected day{" "}
        </h3>
      ) : (
        Object.values(time).map(({ from, to }, i1) => {
          const time = dayjs(to, "hh:mm").diff(dayjs(from, "hh:mm"), "hours");

          return Array.apply(null, Array(time)).map((e, i) => {
            let AdditionalStyle = {};
            const newfrom = from;
            newfrom;
            let disa = false;
            if (
              reservedTimes.find(
                (f) => f.date == date && f.time.from == newfrom
              )
            ) {
              disa = true;
            }
            const newto = dayjs(from, "hh:mm")
              .add(1, "hours")
              .format("hh:mm")
              .toString();
            from = newto;
            if (selectedIndex == i + "-" + i1) {
              AdditionalStyle = {
                border: "3px solid red",
              };
            }
            return (
              <Button
                disabled={disa}
                sx={{
                  ":disabled": { background: "#dfeaf4" },
                }}
                style={{
                  cursor: "pointer",
                  border: ".5px black solid",
                  color: "black",
                  padding: "20px",
                  margin: "10px",
                  ...AdditionalStyle,
                }}
                onClick={() => {
                  selected.current = newfrom + "-" + newto;
                  setIndex(i + "-" + i1);
                  onSelect(newfrom + "-" + newto);
                }}
              >
                {newfrom} - {newto}
              </Button>
            );
          });
        })
      )}
    </div>
  );
};
