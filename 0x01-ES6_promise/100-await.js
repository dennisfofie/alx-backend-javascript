import { uploadPhoto } from "./utils";
import { createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    const myUser = await createUser();
    const myphoto = await uploadPhoto();
    return {
      photo: myphoto,
      user: myUser,
    };
  } catch {
    return {
      photo: null,
      user: null,
    };
  }
}
