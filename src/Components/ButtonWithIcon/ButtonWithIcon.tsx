import { Badge, Button, IconButton } from "@mui/material";
interface IProps {
  text: string;
  Icon: React.ComponentType;
  onClick?(args?: any): void;
}
export default ({ text, Icon, onClick = () => {} }: IProps) => {
  if (text == "") {
    return (
      <IconButton onClick={() => onClick()} size="large" color="inherit">
        <Badge badgeContent={0} color="error">
          <Icon />
        </Badge>
      </IconButton>
    );
  }
  return (
    <Button
      style={{ color: "white", border: "none" }}
      variant="outlined"
      endIcon={
        <IconButton onClick={() => onClick()} size="large" color="inherit">
          <Badge badgeContent={0} color="error">
            <Icon />
          </Badge>
        </IconButton>
      }
    >
      {text}
    </Button>
  );
};
