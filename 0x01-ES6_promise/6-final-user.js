import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(
  firstName,
  lastName,
  filename
) {
  try {
    const currentUser = await signUpUser(firstName, lastName);
    const userPhoto = await uploadPhoto(filename);
    return Promise.all([user, photo]);
  } catch {}
}
