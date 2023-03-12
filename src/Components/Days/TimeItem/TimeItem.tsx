import ButtonWithIcon from "../../ButtonWithIcon/ButtonWithIcon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import dayjs from "dayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";

export default ({ times, index, refe }: any) => {
  const ti1 = Array.apply(null, Array(7)).map((_q, i) => {
    return Object.values(times[i] || {});
  });
  const [time, setTimes] = useState<any>(ti1);
  useEffect(() => {
    const ti = Array.apply(null, Array(7)).map((_q, i) => {
      return Object.values(time[i] || {});
    });
    setTimes(ti);
  }, [times, index]);
  useEffect(() => {
    refe.current = time;
  });
  return (
    <div style={{ color: "black" }}>
      <div style={{ marginTop: 50 }}>
        <div style={{ marginTop: 20 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {time &&
              time[index].map((e: any, i: number) => {
                const [v1, v2] = [dayjs(e.from, "HH:mm"), dayjs(e.to, "HH:mm")];
                return (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <DesktopTimePicker
                      format="HH:00"
                      onChange={(e1) => {
                        if (!e1) e1 = dayjs("00:00", "HH:mm");
                        if (
                          dayjs(e1, "HH:mm").isAfter(
                            dayjs(time[index][i].to, "HH:mm")
                          )
                        ) {
                          e1 = dayjs(time[index][i].to, "HH:mm");
                        }
                        let a = false;
                        time[index].forEach(
                          (
                            element: { from: string; to: string },
                            ind: number
                          ) => {
                            if (ind == i) return;
                            if (
                              dayjs(e1, "HH:mm").isAfter(
                                dayjs(element.from, "HH:mm"),
                                "hour"
                              )
                            ) {
                              time[index][i].from = dayjs(
                                element.from,
                                "HH:mm"
                              );
                              a = true;
                            }
                          }
                        );
                        if (!a) time[index][i].from = dayjs(e1, "HH:mm");
                        setTimes([...time]);
                      }}
                      value={v1}
                    />
                    ____
                    <DesktopTimePicker
                      format="HH:00"
                      value={v2}
                      onChange={(e1) => {
                        if (!e1) e1 = dayjs("00:00", "HH:mm");
                        if (
                          dayjs(e1, "HH:mm").isBefore(
                            dayjs(time[index][i].from, "HH:mm")
                          )
                        ) {
                          e1 = dayjs(time[index][i].from, "HH:mm");
                        }
                        let a = false;
                        time[index].forEach(
                          (
                            element: { from: string; to: string },
                            ind: number
                          ) => {
                            if (ind == i) return;
                            if (
                              dayjs(e1, "HH:mm").isAfter(
                                dayjs(element.from, "HH:mm"),
                                "hour"
                              )
                            ) {
                              time[index][i].to = dayjs(element.from, "HH:mm");
                              a = true;
                            }
                          }
                        );
                        if (!a) time[index][i].to = dayjs(e1, "HH:mm");
                        setTimes([...time]);
                      }}
                    />
                  </div>
                );
              })}
          </LocalizationProvider>
        </div>
      </div>
      <div>
        <ButtonWithIcon
          style={{ backgroundColor: "black", padding: 10, marginTop: 50 }}
          onClick={(e) => {
            time[index].push({ from: "00:00", to: "00:00" });
            setTimes([...time]);
          }}
          Icon={AddCircleOutlineIcon}
          text="Add time"
        />
      </div>
    </div>
  );
};
