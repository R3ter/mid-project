import {
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
    console.log(newData);
    return { ...newData, id: querySnapshot?.docs[0].id } as any;
  });
};
