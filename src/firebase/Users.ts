import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./Init";

export const CheckUser = async ({
  email,
  id,
}: {
  email?: string;
  id?: string;
}) => {
  return await getDocs(
    query(
      collection(db, "Users"),
      email ? where("email", "==", email) : where("id", "==", id)
    )
  ).then((querySnapshot) => {
    const newData = querySnapshot?.docs[0]?.data();
    if (!newData) return null;
    newData;
    return { ...newData, id: querySnapshot?.docs[0].id } as any;
  });
};
export const createUser = async ({
  email,
  name,
  password,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  email, name, password;
  return await addDoc(collection(db, "Users"), {
    email,
    name,
    password,
  })
    .then(async (e) => ({ id: e.id, email, fullName: name, isTeacher: false }))
    .catch(() => null);
};
