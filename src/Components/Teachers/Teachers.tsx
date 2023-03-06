import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import TeacherCard from "../TeacherCard/TeacherCard";
import "./style.scss";
export default () => {
  const fetchTeachers = async () => {
    const res = await fetch(
      "https://63f74ea0833c7c9c60810d71.mockapi.io/Teachers"
    );
    return res.json();
  };
  const { isLoading, data } = useQuery("teachers", fetchTeachers);
  console.log(data);
  return (
    <div className="TeachersPage">
      <p>AVAILABLE TUTORS</p>
      <div className="cards">
        {isLoading && <CircularProgress color="success" />}
        {data &&
          data.map((e: any) => {
            console.log(e);
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
