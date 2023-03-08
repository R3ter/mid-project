import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { updateAccount } from "../functions/Account";
import { db } from "./Init";

interface teacherInfo {
  availableDays: [];
  avatar: string;
  country: string;
  description: string;
  name: string;
  rate: number;
  userId: string;
}

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
  if (!id) return undefined;
  return await getDoc(doc(db, "Teachers", id))
    .then((querySnapshot) => {
      const newData = querySnapshot?.data();
      return newData;
    })
    .catch(() => undefined);
};
export const addTeacher = async ({
  availableDays,
  avatar,
  country,
  description,
  name,
  userId,
}: teacherInfo) => {
  return await addDoc(collection(db, "Teachers"), {
    userId,
    availableDays: Object.assign({}, availableDays),
    avatar,
    country,
    description,
    name,
    rate: 0,
  })
    .then(async (e) => {
      return await updateDoc(doc(db, "Users", userId), {
        teacherId: e.id,
        isTeacher: true,
      })
        .then(() => {
          updateAccount({ teacherId: e.id, isTeacher: true });
          return true;
        })
        .catch(() => false);
    })
    .catch(() => false);
};
