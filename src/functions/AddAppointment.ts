import { addAppointment, AppointmentType } from "../firebase/Appointment";
import { isLogged, userInfo } from "./Account";

export default async (data: AppointmentType) => {
  if (isLogged()) {
    const user = userInfo();
    return await addAppointment({ ...data, studentId: user.id });
  }
  return false;
};
