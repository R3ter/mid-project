import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/Init";
export const uploadFile = (
  file: File,
  username: string,
  callBack?: () => void
) => {
  if (!file) {
    return;
  }
  const storageRef = ref(storage, `/files/${username}.jpg`);
  uploadBytesResumable(storageRef, file).then(() => {
    if (callBack) callBack();
  });
};
export const getImage = async (imageName: string) => {
  const storageRef = ref(storage, `/files/${imageName}.jpg`);
  return await getDownloadURL(storageRef);
};
