import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const profile = uploadPhoto();
  const promise = Promise.all([user, profile]);
  promise
    .then(([user, profile]) => {
      console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log(Error('Signup system offline')));
}
