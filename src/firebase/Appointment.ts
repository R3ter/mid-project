import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./Init";
export interface AppointmentType {
  approved?: boolean;
  date: string;
  description: string;
  location?: string;
  rejected?: boolean;
  rejectionReason?: string;
  studentId?: string;
  teacherID: string;
  time: {
    from: string;
    to: string;
  };
  typeOfMeeting: string;
}
export const addAppointment = async ({
  date,
  description,
  location = "",
  studentId,
  teacherID,
  time,
  typeOfMeeting,
}: AppointmentType) => {
  return await addDoc(collection(db, "Appoitments"), {
    approved: false,
    date: date,
    description: description,
    location: location,
    rejected: false,
    rejectionReason: "",
    studentId: `/Users/${studentId}`,
    teacherID: `/Users/${teacherID}`,
    time: {
      from: time.from,
      to: time.to,
    },
    typeOfMeeting: typeOfMeeting,
  })
    .then(() => true)
    .catch(() => false);
};

export const getAppointments = async (userId: string, date: string) => {
  return await getDocs(
    query(
      collection(db, "Appoitments"),
      where("studentId", "==", "/Users/" + userId),
      where("date", "==", date)
    )
  ).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    if (!newData) return null;
    return newData as any;
  });
};
