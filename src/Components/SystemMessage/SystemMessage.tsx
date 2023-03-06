import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, { useRef, useState } from "react";

interface IProps {
  setMessRef: any;
  text: string;
}
export default ({ setMessRef, text }: IProps) => {
  const [state, setState] = useState(false);
  const time = useRef<any>();
  setMessRef.current = (bool: boolean) => {
    setState(bool);
    if (time.current) {
      clearTimeout(time.current);
    }
    time.current = setTimeout(() => {
      setState(false);
    }, 2000);
  };
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      open={state}
    >
      <Alert severity="error">{text}</Alert>
    </Snackbar>
  );
};
