import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useState } from "react";

interface IProps {
  onChange(e: any): void;
}
export default function CustomToolbarFormat({ onChange }: IProps) {
  const [state, setState] = useState(dayjs(new Date()));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          onChange={(e) => {
            onChange(e);
            setState(e);
          }}
          value={state}
          displayStaticWrapperAs="desktop"
          disablePast
          sx={{
            backgroundColor: "#aed1ff",
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
