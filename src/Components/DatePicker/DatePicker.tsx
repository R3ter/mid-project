import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useState } from "react";

interface IProps {
  onChange(e: any): void;
  disablePast?: boolean;
}
export default function CustomToolbarFormat({
  onChange,
  disablePast = true,
}: IProps) {
  const [state, setState] = useState(dayjs(new Date()));
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          onChange={(e: any) => {
            onChange(e);
            setState(e);
          }}
          value={state}
          displayStaticWrapperAs="desktop"
          disablePast={disablePast}
          sx={{
            borderColor: "white",
            backgroundColor: "gray",
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
