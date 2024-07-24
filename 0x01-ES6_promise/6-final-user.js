import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function formatResult(result) {
  return {
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  };
}

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map(formatResult));
}
