import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TimeItem from "./TimeItem/TimeItem";

interface IProps {
  availableDays: [Object];
  refe: any;
}
export default ({ availableDays, refe }: IProps) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: 800, minWidth: 400, bgcolor: "Menu" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Sunday" />
        <Tab label="Monday" />
        <Tab label="tuesday" />
        <Tab label="wednesday" />
        <Tab label="thursday" />
        <Tab label="friday" />
        <Tab label="saturday" />
      </Tabs>
      <TimeItem refe={refe} times={availableDays} index={value} />
    </Box>
  );
};
