import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { updateAccount } from "../functions/Account";
import { db } from "./Init";

export interface ITeacherInfo {
  availableDays: [];
  avatar: string;
  country: string;
  description: string;
  name: string;
  rate: number;
  userId: string;
  teacherId: string;
  id?: string;
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
  teacherId,
}: ITeacherInfo) => {
  if (teacherId) {
    return await setDoc(
      await getDoc(doc(db, "Teachers", teacherId)).then((e) => e.ref),
      {
        userId,
        availableDays: Object.assign({}, availableDays),
        avatar,
        country,
        description,
        name,
        rate: 0,
      },
      { merge: true }
    )
      .then(async (e) => {
        updateAccount({ teacherId: teacherId, isTeacher: true });
        return true;
      })
      .catch(() => false);
  }

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
export const addTeacherRate = async (teacherId: string, starsNum: number) => {
  const teacher = await getDoc(doc(db, "Teachers", teacherId));
  return await setDoc(
    teacher.ref,
    {
      rateCount: teacher?.data()?.rateCount
        ? teacher?.data()?.rateCount + 1
        : 1,
      rateSum: teacher?.data()?.rateSum
        ? teacher?.data()?.rateSum + starsNum
        : starsNum,
    },
    { merge: true }
  );
};
