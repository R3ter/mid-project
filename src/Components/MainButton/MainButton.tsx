import "./style.scss";
interface IProps {
  text: string;
  type?: "Default" | "Secondary";
}
export default ({ text, type = "Default" }: IProps) => {
  return (
    <button
      className={type == "Default" ? "MainButton" : "MainButtonSecondary"}
    >
      {text}
    </button>
  );
};
