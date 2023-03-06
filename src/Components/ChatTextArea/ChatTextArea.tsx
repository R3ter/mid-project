import "./style.scss";
import SendIcon from "@mui/icons-material/Send";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

interface IProps {
  onSubmit(args: string): void;
}
export default ({ onSubmit }: IProps) => {
  return (
    <div className="ChatTexArea">
      <input
        onKeyPress={function (e) {
          if (e.key == "Enter") {
            onSubmit(e.currentTarget.value);
          }
        }}
      />
      <div>
        <ButtonWithIcon text="" Icon={SendIcon} />
      </div>
    </div>
  );
};
