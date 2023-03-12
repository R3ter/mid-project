import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import TeacherCard from "../../../Components/TeacherCard/TeacherCard";
import { getTeachers, ITeacherInfo } from "../../../firebase/Teachers";
import { useFirebase } from "../../../Hooks/useFirebase";

export default () => {
  const { data, isLoading } = useFirebase(getTeachers());

  return (
    <div>
      <Button>
        <Link to={"/tutors"}>
          <p>view all</p>
        </Link>
      </Button>
      <div style={{ display: "flex" }}>
        {!isLoading &&
          data.map((e: ITeacherInfo) => {
            return (
              <TeacherCard
                avatar={e.avatar}
                country={e.country}
                description={e.description}
                id={e.id || "unknown"}
                name={e.name}
                rating={e.rate}
              />
            );
          })}
      </div>
    </div>
  );
};
