import DatePicker from "../../Components/DatePicker/DatePicker";
import { getAppointments } from "../../firebase/Appointment";
import { isLogged, userInfo } from "../../functions/Account";
import { useFirebase } from "../../Hooks/useFirebase";
import { useEffect, useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import { Link, useNavigate } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./style.scss";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import WriteReview from "../WriteReview/WriteReview";
export default () => {
  const [review, setReview] = useState({ show: false, id: "", teacherId: "" });
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged()) {
      navigate("/login", { replace: true });
    }
  }, []);
  const [date, setDate] = useState(dayjs().format("DD-MM-YYYY").toString());
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
      <div className="appointments">
        {data &&
          (data.length == 0 ? (
            <h2 style={{ color: "black", textAlign: "center" }}>
              You have no appointments on this day
            </h2>
          ) : (
            data.map(
              ({
                description,
                date,
                time,
                typeOfMeeting,
                rejected,
                approved,
                rejectionReason,
                name,
                id,
                reviewed,
                teacherID,
              }: any) => {
                return (
                  <div className="card">
                    <h3>{name || "User's name"}</h3>
                    <h4>{description}</h4>
                    <div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CalendarMonthIcon style={{ alignSelf: "center" }} />
                        <p>{date}</p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                      {rejected
                        ? "Rejected"
                        : approved
                        ? "Accepted"
                        : dayjs()
                            .add(1, "hour")
                            .isAfter(
                              dayjs(`${time.to} ${date}`, "hh:mm DD-MM-YYYY")
                            )
                        ? "Rejected"
                        : "Pending"}
                    </h2>
                    {rejected && (
                      <>
                        <h3>rejection Reason</h3>
                        <p style={{ color: "red" }}>{rejectionReason}</p>
                      </>
                    )}
                    {dayjs().isAfter(
                      dayjs(`${time.to} ${date}`, "hh:mm DD-MM-YYYY")
                    ) &&
                      !reviewed &&
                      approved && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Button
                            onClick={() => {
                              setReview({
                                show: true,
                                id,
                                teacherId: teacherID,
                              });
                            }}
                          >
                            <DriveFileRenameOutlineIcon />
                            Write a review
                          </Button>
                          <Button style={{ color: "red" }}>
                            <FlagIcon />
                            didn't show up
                          </Button>
                        </div>
                      )}
                  </div>
                );
              }
            )
          ))}
        {review.show && (
          <WriteReview
            teacherId={review.teacherId}
            onclick={() => {
              refresh();
              setReview({ id: "", show: false, teacherId: "" });
            }}
            id={review.id}
          />
        )}
      </div>
    </div>
  );
};
