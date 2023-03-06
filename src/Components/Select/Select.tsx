import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { TextField } from "@mui/material";

interface IProps {
  onSelect?(args: string): void;
  error: boolean;
}
export default ({ onSelect = () => {}, error }: IProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    onSelect(event.target.value);

    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: "200px" }}>
      <FormControl fullWidth>
        <InputLabel>Type of meeting</InputLabel>
        <Select
          required
          value={age}
          label="Age"
          error={error}
          onChange={handleChange}
        >
          <MenuItem value={"physically"}>Physically</MenuItem>
          <MenuItem value={"online"}>Online</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
