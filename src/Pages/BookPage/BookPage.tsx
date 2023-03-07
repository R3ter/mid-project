import { CircularProgress, TextField } from "@mui/material";
import DatePicker from "../../Components/DatePicker/DatePicker";
import MainButton from "../../Components/MainButton/MainButton";
import Select from "../../Components/Select/Select";
import TimePicker from "../../Components/TimePicker/TimePicker";
import SendIcon from "@mui/icons-material/Send";
import { useFirebase } from "./../../Hooks/useFirebase";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import SystemMessage from "../../Components/SystemMessage/SystemMessage";
import { getTeacherInfo } from "../../firebase/getTeachers";
import AddAppointment from "../../functions/AddAppointment";

export default () => {
  const params = useParams();
  const mass = useRef((args: boolean) => {});
  const navigate = useNavigate();
  const form = useRef({
    date: dayjs(new Date()).format("DD-MM-YYYY").toString(),
    time: "",
    comment: "",
    type: "",
  });

  const [showError, setShowError] = useState({ show: false, text: "" });
  const [day, setDay] = useState(dayjs(new Date()).day());
  const [loadingPost, setLoadingPost] = useState(false);
  const { data, isLoading } = useFirebase(getTeacherInfo(params?.id || ""));

  return (
    <div style={{ margin: "20px" }}>
      <div>
        <DatePicker
          disablePast={true}
          onChange={(e: dayjs.Dayjs) => {
            setDay(e.day());
            form.current.date = e.format("DD-MM-YYYY").toString();
          }}
        />
        {isLoading && <CircularProgress color="success" />}
        <TimePicker
          onSelect={(selected) => {
            form.current.time = selected;
          }}
          time={
            data ? (data.availableDays[day] ? data.availableDays[day] : []) : []
          }
        />
      </div>
      <div
        style={{
          margin: "auto",
          marginBottom: "100px",
        }}
      >
        <TextField
          error={showError.show}
          style={{ maxWidth: "500px", marginBottom: "50px" }}
          label="Comment"
          multiline
          onChange={(e) => (form.current.comment = e.target.value)}
          minRows={1}
          maxRows="10"
          placeholder="Add some notes for the teacher"
          fullWidth
          variant="standard"
        />
        <Select
          error={showError.show}
          onSelect={(e) => {
            form.current.type = e;
          }}
        />
      </div>
      <MainButton
        loading={loadingPost}
        onclick={async () => {
          setLoadingPost(true);
          if (
            form.current.comment &&
            form.current.date &&
            form.current.time &&
            form.current.type
          ) {
            if (
              await AddAppointment({
                date: form.current.date,
                description: form.current.comment,
                teacherID: params.id || "",
                time: (() => {
                  const [from, to] = form.current.time.split("-");
                  return { from, to };
                })(),
                typeOfMeeting: form.current.type,
              })
            ) {
              navigate("/calendar");
            }
            setShowError({
              show: true,
              text: "something went wrong try again later!!",
            });
          } else {
            setShowError({ show: true, text: "all fields are required" });
          }
          setLoadingPost(false);
        }}
        text="Send"
        type="Default"
        Icon={SendIcon}
      />
      <SystemMessage open={showError.show} text={showError.text} />
      <MainButton
        onclick={() => {
          navigate("/tutors");
        }}
        text="Cancel"
        type="Secondary"
      />
    </div>
  );
};
