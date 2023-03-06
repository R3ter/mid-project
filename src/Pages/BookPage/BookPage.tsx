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

  const [showError, setShowError] = useState(false);
  const [day, setDay] = useState(dayjs(new Date()).day());

  const { data, isLoading } = useFirebase(getTeacherInfo(params?.id || ""));

  return (
    <div style={{ margin: "20px" }}>
      <div>
        <DatePicker
          onChange={(e: dayjs.Dayjs) => {
            setDay(e.day());
            console.log(e);
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
          error={showError}
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
          error={showError}
          onSelect={(e) => {
            form.current.type = e;
          }}
        />
      </div>
      <MainButton
        onclick={() => {
          if (
            form.current.comment &&
            form.current.date &&
            form.current.time &&
            form.current.type
          ) {
          } else {
            setShowError(true);
            mass.current(true);
          }
        }}
        text="Send"
        type="Default"
        Icon={SendIcon}
      />
      <SystemMessage
        text="please fill all of the information"
        setMessRef={mass}
      />
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
