import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  token: null,
  regToken: null,
  firstAppLaunch: {},
  signupResponse: {},
  loginResponse: {},
  logoutResponse: {},
  forgotPasswordResponse: {},
  otpVerifyResponse: {},
  changePasswordResponse: {},
  profileResponse: {},
  updateProfileResponse: {},
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    // first app launch
    notFirstAppLaunchReq(state, action) {
      state.status = action.type;
    },
    notFirstAppLaunchSuccess(state, action) {
      state.status = action.type;
      state.firstAppLaunch = action.payload;
    },
    notFirstAppLaunchFailure(state, action) {
      state.status = action.type;
    },

    // TOKEN
    getTokenRequest(state, action) {
      state.isLoading = true;
      state.status = action.type;
    },
    getTokenSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.regToken = action.payload.regToken;
      state.status = action.type;
    },
    getTokenFailure(state, action) {
      state.isLoading = false;
      state.error = action.error;
      state.status = action.type;
    },

    //SIGN UP
    signupRequest(state, action) {
      state.status = action.type;
    },
    signupSuccess(state, action) {
      state.signupResponse = action.payload;
      state.status = action.type;
    },
    signupFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //SIGN IN
    loginRequest(state, action) {
      state.status = action.type;
    },
    loginSuccess(state, action) {
      state.loginResponse = action.payload;
      state.status = action.type;
    },
    loginFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //LOGOUT
    logoutRequest(state, action) {
      state.status = action.type;
    },
    logoutSuccess(state, action) {
      state.logoutResponse = action.payload;
      state.status = action.type;
    },
    logoutFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //FORGOT PASSWORD
    forgotPasswordRequest(state, action) {
      state.status = action.type;
    },
    forgotPasswordSuccess(state, action) {
      state.forgotPasswordResponse = action.payload;
      state.status = action.type;
    },
    forgotPasswordFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //OTP VERIFY
    otpVerifyRequest(state, action) {
      state.status = action.type;
    },
    otpVerifySuccess(state, action) {
      state.otpVerifyResponse = action.payload;
      state.status = action.type;
    },
    otpVerifyFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //CHANGE PASSWORD
    changePasswordRequest(state, action) {
      state.status = action.type;
    },
    changePasswordSuccess(state, action) {
      state.changePasswordResponse = action.payload;
      state.status = action.type;
    },
    changePasswordFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //PROFILE DETAILS
    getProfileRequest(state, action) {
      state.status = action.type;
    },
    getProfileSuccess(state, action) {
      state.profileResponse = action.payload;
      state.status = action.type;
    },
    getProfileFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    // UPDATE PROFILE
    updateProfileRequest(state, action) {
      state.status = action.type;
    },
    updateProfileSuccess(state, action) {
      state.status = action.type;
      state.updateProfileResponse = action.payload;
    },
    updateProfileFailure(state, action) {
      state.status = action.type;
    },
  },
});

export const {
  notFirstAppLaunchReq,
  notFirstAppLaunchSuccess,
  notFirstAppLaunchFailure,

  getUserType,

  getTokenRequest,
  getTokenSuccess,
  getTokenFailure,

  signupRequest,
  signupSuccess,
  signupFailure,

  loginRequest,
  loginSuccess,
  loginFailure,

  logoutRequest,
  logoutSuccess,
  logoutFailure,

  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,

  otpVerifyRequest,
  otpVerifySuccess,
  otpVerifyFailure,

  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,

  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,

  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
