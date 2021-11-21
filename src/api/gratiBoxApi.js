import axios from 'axios';

const API = 'http://localhost:4000';

const signUpApi = ({
  userName,
  userEmail,
  userPassword,
  userConfirmPassword,
}) => axios.post(`${API}/sign-up`, {
  userName,
  userEmail,
  userPassword,
  userConfirmPassword,
});

const signInApi = ({
  userEmail,
  userPassword,
}) => axios.post(`${API}/sign-in`, {
  userEmail,
  userPassword,
});

const availablePlansApi = () => axios.get(`${API}/plans`);
const newSignatureFormApi = () => axios.get(`${API}/new-signature`);

export {
  signUpApi,
  signInApi,
  availablePlansApi,
  newSignatureFormApi,
};
