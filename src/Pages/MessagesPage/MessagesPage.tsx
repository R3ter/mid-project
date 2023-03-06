import ChatBody from "../../Components/ChatBody/ChatBody";
import ChatContacts from "../../Components/ChatContacts/ChatContacts";
import "./style.scss";
export default () => {
  return (
    <div className="MessagesPage">
      <ChatContacts />
      <ChatBody />
    </div>
  );
};
