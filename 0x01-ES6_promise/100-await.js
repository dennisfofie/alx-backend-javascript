import uploadPhoto from './utils';
import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const myUser = await createUser();
    const myphoto = await uploadPhoto();
    return {
      photo: myphoto,
      user: myUser,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
