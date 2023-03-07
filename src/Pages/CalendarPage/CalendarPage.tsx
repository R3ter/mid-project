import DatePicker from "../../Components/DatePicker/DatePicker";
import { getAppointments } from "../../firebase/Appointment";
import { isLogged, userInfo } from "./../../functions/Login";
import { useFirebase } from "../../Hooks/useFirebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged()) {
      navigate("/login");
    }
  }, []);
  const [date, setDate] = useState("");
  const { data, isLoading, refresh } = useFirebase(
    getAppointments(userInfo().id, date)
  );
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
      {data &&
        data.map(({ description }: any) => {
          return (
            <div style={{ backgroundColor: "red", padding: "10px" }}>
              {description}
            </div>
          );
        })}
    </div>
  );
};
