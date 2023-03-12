import "./style.scss";
import { Textarea } from "@mui/joy";
import { Rating } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MainButton from "../../Components/MainButton/MainButton";
import { useMutationFirebase } from "../../Hooks/useFirebase";
import { addReview } from "../../firebase/Reviews";
import { userInfo } from "../../functions/Account";
import { useRef } from "react";

export default ({
  id,
  onclick = () => {},
  teacherId,
}: {
  id: string;
  onclick(): void;
  teacherId: string;
}) => {
  const { data, isLoading, mutate } = useMutationFirebase(addReview);
  const values = useRef({ rate: 5, comment: "" });
  return (
    <div className="WriteReview">
      <div>
        <h2>How was the meeting?</h2>
        <Rating
          precision={0.5}
          size={"large"}
          defaultValue={5}
          onChange={(e: any) => {
            values.current.rate = e.target.value;
          }}
        />
        <br />
        <br />
        <Textarea
          minRows={10}
          onChange={(e) => {
            values.current.comment = e.target.value;
          }}
          autoFocus
          placeholder="what do you think about the teacher?"
          sx={{ padding: 3, minWidth: "400px" }}
        />
        <br />
        <br />
        <MainButton
          loading={isLoading}
          text="Submit"
          type="Secondary"
          Icon={DriveFileRenameOutlineIcon}
          onclick={async () => {
            await mutate({
              Rate: values.current.rate,
              comment: values.current.comment,
              teacherId: teacherId,
              userId: userInfo().id,
              appointmentId: id,
              id,
              studentName: userInfo().name,
            });
            onclick();
          }}
        />
      </div>
    </div>
  );
};
