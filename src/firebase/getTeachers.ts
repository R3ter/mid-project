import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./Init";

export const getTeachers = async () => {
  return await getDocs(collection(db, "Teachers")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });
};
export const getTeacherInfo = async (id: string) => {
  return await getDoc(doc(db, "Teachers", id)).then((querySnapshot) => {
    const newData = querySnapshot.data();
    return newData;
  });
};
