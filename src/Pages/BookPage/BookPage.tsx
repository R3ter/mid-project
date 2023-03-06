import { TextField } from "@mui/material";
import DatePicker from "../../Components/DatePicker/DatePicker";
import MainButton from "../../Components/MainButton/MainButton";
import Select from "../../Components/Select/Select";
import TimePicker from "../../Components/TimePicker/TimePicker";
import SendIcon from "@mui/icons-material/Send";

export default () => {
  return (
    <div style={{ margin: "20px" }}>
      <div>
        <DatePicker />
        <TimePicker />
      </div>
      <div
        style={{
          margin: "auto",
          marginBottom: "100px",
        }}
      >
        <TextField
          style={{ maxWidth: "500px", marginBottom: "50px" }}
          label="Comment"
          multiline
          minRows={1}
          maxRows="10"
          placeholder="Add some notes for the teacher"
          fullWidth
          variant="standard"
        />
        <Select />
      </div>
      <MainButton text="Send" type="Default" Icon={SendIcon} />
      <MainButton text="Cancel" type="Secondary" />
    </div>
  );
};
