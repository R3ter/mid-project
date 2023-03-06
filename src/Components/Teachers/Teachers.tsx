import TeacherCard from "../TeacherCard/TeacherCard";
import "./style.scss";
export default () => {
  return (
    <div className="TeachersPage">
      <p>AVAILABLE TUTORS</p>
      <div className="cards">
        <TeacherCard
          rating={4.5}
          name="Fidius P"
          country="Canada"
          description={`Hello! I am Milly. I live in Scotland in the United Kingdom and I am a yoga teacher. I help children and adults with their English. I can he...`}
        />
        <TeacherCard
          rating={4.5}
          name="Fidius P"
          country="Canada"
          description={`Hello! I am Milly. I live in Scotland in the United Kingdom and I am a yoga teacher. I help children and adults with their English. I can he...`}
        />
        <TeacherCard
          rating={4.5}
          name="Fidius P"
          country="Canada"
          description={`Hello! I am Milly. I live in Scotland in the United Kingdom and I am a yoga teacher. I help children and adults with their English. I can he...`}
        />
        <TeacherCard
          rating={4.5}
          name="Fidius P"
          country="Canada"
          description={`Hello! I am Milly. I live in Scotland in the United Kingdom and I am a yoga teacher. I help children and adults with their English. I can he...`}
        />
      </div>
    </div>
  );
};
