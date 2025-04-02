import {BASE_URL} from '@env';

export const API = {
  auth: {
    login: 'auth/login',
    signup: '',
    logout: '',
    refreshToken: 'auth/refresh',
  },
  user: {
    profile: 'auth/me',
    editProfile: '',
    deleteAccount: ''
  },
};

export const IMAGES_BUCKET_URL = {
  profile: `${BASE_URL}/uploads/users/`,
};
