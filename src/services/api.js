import axios from 'axios';

axios.defaults.baseURL =
  'https://6391c2d7b750c8d178cc7968.mockapi.io/contacts/';
export const getAllContacts = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addNewContact = async (contact = {}) => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const deleteSelectedContact = async (contactId = '') => {
  const { data } = await axios.delete(`contacts/${contactId}`);
  return data;
};

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const signUpRequest = async formData => {
  const { data } = await $publicHost.post('users/signup', formData);

  return data;
};

export const signInRequest = async formData => {
  const { data } = await $publicHost.post('users/login', formData);

  return data;
};

export const getContactsRequest = async () => {
  const { data } = await $privateHost.get('contacts');

  return data;
};
