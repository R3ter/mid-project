import { Badge, Button, CircularProgress, IconButton } from "@mui/material";
interface IProps {
  text: string;
  Icon: React.ComponentType;
  onClick?(args?: any): void;
  style?: React.CSSProperties;
  loading?: boolean;
  spinnerColor?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
export default ({
  text,
  Icon,
  spinnerColor = "success",
  onClick = () => {},
  style = {},
  loading = false,
}: IProps) => {
  if (text == "") {
    return (
      <IconButton
        style={{ ...style }}
        onClick={(e) => onClick(e)}
        size="large"
        color="inherit"
        disabled={loading}
      >
        <Badge badgeContent={0} color="error">
          {!loading ? <Icon /> : <CircularProgress color={spinnerColor} />}
        </Badge>
      </IconButton>
    );
  }
  return (
    <Button
      onClick={(e) => onClick(e)}
      style={{ color: "white", border: "none", ...style }}
      variant="outlined"
      disabled={loading}
      endIcon={
        <IconButton size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            {!loading ? <Icon /> : <CircularProgress color={spinnerColor} />}
          </Badge>
        </IconButton>
      }
    >
      {!loading && text}
    </Button>
  );
};
