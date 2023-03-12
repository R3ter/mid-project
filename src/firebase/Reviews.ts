import dayjs from "dayjs";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { updateAppointReview } from "./Appointment";
import { db } from "./Init";
import { addTeacherRate } from "./Teachers";

export interface IReview {
  Rate: number;
  comment: string;
  teacherId: string;
  id: string;
  userId: string;
  appointmentId: string;
  studentName: string;
  date?: Date;
}
export const addReview = async ({
  Rate,
  comment,
  teacherId,
  id,
  userId,
  appointmentId,
  studentName,
}: IReview) => {
  return await addDoc(collection(db, "Reviews"), {
    Rate,
    comment,
    teacherId,
    userId,
    appointmentId,
    date: dayjs().toString(),
    studentName,
  })
    .then(async () => {
      await updateAppointReview({ id });
      return await addTeacherRate(teacherId, Rate).then(() => true);
    })
    .catch(() => false);
};
export const getTeacherReviews = async ({ teacherId }: IReview) => {
  return await getDocs(
    query(collection(db, "Reviews"), where(teacherId, "==", teacherId))
  ).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    if (!newData) return null;
    return newData as any;
  });
};
export const getTopReviews = async () => {
  return await getDocs(
    query(collection(db, "Reviews"), orderBy("Rate"), limit(3))
  ).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    if (!newData) return null;
    return newData as any;
  });
};
