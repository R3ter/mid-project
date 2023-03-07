import DatePicker from "../../Components/DatePicker/DatePicker";
import { getAppointments } from "../../firebase/Appointment";
import { isLogged, userInfo } from "./../../functions/Login";
import { useFirebase } from "../../Hooks/useFirebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./style.scss";
export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged()) {
      navigate("/login", { replace: true });
    }
  }, []);
  const [date, setDate] = useState("");
  const { data, isLoading, refresh } = useFirebase(
    getAppointments(userInfo().id, date)
  );
  console.log(data);
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <DatePicker
        disablePast={false}
        onChange={(e) => {
          setDate(e.format("DD-MM-YYYY").toString());
          refresh();
        }}
      />
      <div className="appointments">
        {data &&
          data.map(
            ({
              description,
              date,
              time,
              typeOfMeeting,
              rejected,
              approved,
              rejectionReason,
            }: any) => {
              return (
                <div className="card">
                  <h3>Name dwa</h3>
                  <h4>{description}</h4>
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <CalendarMonthIcon style={{ alignSelf: "center" }} />
                      <p>{date}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <AccessAlarmIcon style={{ alignSelf: "center" }} />
                      <p>
                        {time.from}-{time.to}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "left" }}>
                    <LocationOnIcon style={{ alignSelf: "center" }} />
                    <h2>{typeOfMeeting}</h2>
                  </div>
                  <h2
                    style={{
                      color: rejected ? "red" : approved ? "green" : "gray",
                    }}
                  >
                    {rejected ? "Rejected" : approved ? "Accepted" : "Pending"}
                  </h2>
                  {rejected && (
                    <>
                      <h3>rejection Reason</h3>
                      <p style={{ color: "red" }}>{rejectionReason}</p>
                    </>
                  )}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};
