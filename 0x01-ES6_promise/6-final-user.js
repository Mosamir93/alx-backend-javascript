import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userpromise = signUpUser(firstName, lastName);
  const photopromise = uploadPhoto(fileName);

  return Promise.allSettled([userpromise, photopromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
