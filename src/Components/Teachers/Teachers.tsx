import { CircularProgress } from "@mui/material";
import { getTeachers } from "../../firebase/getTeachers";
import { useFirebase } from "../../Hooks/useFirebase";
import TeacherCard from "../TeacherCard/TeacherCard";
import "./style.scss";
export default () => {
  const { data, isLoading } = useFirebase(getTeachers());

  return (
    <div className="TeachersPage">
      <p>AVAILABLE TUTORS</p>
      <div className="cards">
        {isLoading && <CircularProgress color="success" />}
        {data &&
          data.map((e: any) => {
            return (
              <TeacherCard
                id={e.id}
                avatar={e.avatar}
                rating={4.5}
                name={e.name}
                country="Canada"
                description={e.description || ""}
              />
            );
          })}
      </div>
    </div>
  );
};
