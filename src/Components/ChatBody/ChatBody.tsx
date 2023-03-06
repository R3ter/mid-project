import { useState } from "react";
import ChatTextArea from "../ChatTextArea/ChatTextArea";
import Message from "../Message/Message";
import "./style.scss";
export default () => {
  const massages: { text: string; sender: boolean; name: string }[] = [
    { name: "waleed", text: "awdadwdaw", sender: true },
  ];
  const [massagesState, setMassages] = useState(massages);
  return (
    <div className="ChatBody">
      <ChatTextArea
        onSubmit={(e) => {
          console.log(e);
          massagesState.push({ text: e, name: "waleed", sender: true });
          setMassages([...massagesState]);
        }}
      />
      {massagesState.map(({ name, sender, text }) => {
        return (
          <Message
            image="https://mui.com/static/images/avatar/3.jpg"
            name={name}
            text={text}
            sender={sender}
          />
        );
      })}
    </div>
  );
};
