import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function CustomToolbarFormat() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          onChange={(e) => {
            console.log(e);
          }}
          displayStaticWrapperAs="desktop"
          disablePast
          defaultValue={dayjs(new Date())}
          sx={{
            backgroundColor: "#7f6ff5",
            margin: "auto",
            maxWidth: "500px",
            marginTop: "100px",
            width: "80vw",
          }}
          slotProps={{
            toolbar: { toolbarFormat: "ddd DD MMMM", hidden: false },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
