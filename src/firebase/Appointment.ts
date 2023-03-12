import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./Init";
export interface AppointmentType {
  approved?: boolean;
  date: string;
  description: string;
  name: string;
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
    teacherID: `/Teachers/${teacherID}`,
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
    const newData = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    if (!newData) return null;
    return newData as any;
  });
};
export const getRequestedAppointments = async (
  userId: string | undefined,
  date?: string | null,
  approved?: boolean
) => {
  if (approved) {
    if (!userId) return null;
    return await getDocs(
      query(
        collection(db, "Appoitments"),
        where("teacherID", "==", "/Teachers/" + userId),
        where("approved", "==", true)
      )
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      if (!newData) return null;
      return newData as any;
    });
  }
  return await getDocs(
    query(
      collection(db, "Appoitments"),
      where("teacherID", "==", "/Teachers/" + userId)
    )
  ).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    if (!newData) return null;
    return newData as any;
  });
};

export const updateAppointmentState = async ({
  id,
  state,
  rejectionReason,
}: {
  state: boolean;
  id: string;
  rejectionReason?: string;
}) => {
  return await updateDoc(doc(db, "Appoitments", id), {
    rejected: !state,
    approved: state,
    rejectionReason: !state ? rejectionReason : "",
  })
    .then(() => true)
    .catch(() => false);
};
export const updateAppointReview = async ({ id }: { id: string }) => {
  return await updateDoc(doc(db, "Appoitments", id), {
    reviewed: true,
  })
    .then(() => true)
    .catch(() => false);
};
