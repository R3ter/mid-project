import {
  getRequestedAppointments,
  updateAppointmentState,
} from "../../firebase/Appointment";
import { isLogged, userInfo } from "../../functions/Account";
import { useFirebase, useMutationFirebase } from "../../Hooks/useFirebase";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./style.scss";
import { Button, Slide, TextField } from "@mui/material";
import dayjs from "dayjs";

const NoData = () => {
  return (
    <div style={{ width: "100%", height: "100%", color: "black" }}>
      <EventBusyIcon sx={{ fontSize: "10vw" }} />
      <h1>no requests</h1>
    </div>
  );
};
export default () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rejectionText = useRef("");
  const { data, isLoading, refresh } = useFirebase(
    getRequestedAppointments(userInfo().teacherId, null)
  );
  const {
    data: mutationData,
    isLoading: loadingMutation,
    mutate,
  } = useMutationFirebase(updateAppointmentState);
  useEffect(() => {
    if (!isLogged()) {
      navigate("/login", { replace: true });
    }
  }, []);
  return (
    <div>
      {isLoading && loadingMutation && <LoadingSpinner />}
      <div className="appointments">
        {data &&
          (data.length == 0 ? (
            <NoData />
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
                id,
              }: any) => {
                data;
                return (
                  <div className="card">
                    <h3>Name dwa</h3>
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
                      {rejected ? (
                        "Rejected"
                      ) : approved ? (
                        "Accepted"
                      ) : dayjs()
                          .add(1, "hour")
                          .isBefore(
                            dayjs(`${time.to} ${date}`, "hh:mm DD-MM-YYYY")
                          ) ? (
                        <>
                          <div ref={containerRef}>
                            {!showText && (
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <Button
                                  onClick={() => {
                                    mutate({ state: true, id }).then(() => {
                                      refresh();
                                    });
                                  }}
                                  color="success"
                                >
                                  Approve
                                </Button>
                                <Button
                                  onClick={() => {
                                    setShowText(true);
                                  }}
                                  color="error"
                                >
                                  Reject
                                </Button>
                              </div>
                            )}
                          </div>
                          <Slide
                            direction="right"
                            in={showText}
                            unmountOnExit
                            container={containerRef.current}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <TextField
                                id="filled-basic"
                                onChange={(newValue) => {
                                  if (rejectionText)
                                    rejectionText.current =
                                      newValue.target.value;
                                }}
                                label="Rejection Reason"
                                variant="filled"
                              />
                              <div>
                                <Button
                                  onClick={() => {
                                    mutate({
                                      state: false,
                                      id,
                                      rejectionReason: rejectionText.current,
                                    }).then(() => {
                                      refresh();
                                    });
                                  }}
                                  color="error"
                                >
                                  Reject
                                </Button>
                                <Button
                                  onClick={() => {
                                    setShowText(false);
                                  }}
                                  color="primary"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </Slide>
                        </>
                      ) : (
                        "Time is over"
                      )}
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
            )
          ))}
      </div>
    </div>
  );
};
