import TeacherCard from "../TeacherCard/TeacherCard";

export default () => {
  return (
    <div>
      <p>AVAILABLE TUTORS</p>
      <TeacherCard
        rating={4.5}
        name="Fidius P"
        country="Canada"
        description={`Hello! I am Milly. I live in Scotland in the United Kingdom and I am a yoga teacher. I help children and adults with their English. I can he...`}
      />
    </div>
  );
};
