import {
  createSlice
} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    registered: false,
    isFetching: false,
    error: {
      valid: false,
      message: null
    },
    lastVisitedUrl: "/"
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error.valid = true
      state.error.message = action.payload

    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.registered = true;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error.valid = true;
      state.error.message = action.payload
    },
    refreshData: (state) => {
      state.error.valid = false
      state.error.message = null
      state.isFetching = false
    },
    logOut: (state) => {
      state.currentUser = null;
      state.registered = false
      state.error.valid = false
      state.error.message = null
      state.isFetching = false
    },
    getLastVisited: (state, action) => {
      state.lastVisitedUrl = action.payload
    }
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerFailure,
  registerSuccess,
  refreshData,
  logOut,
  getLastVisited
} = userSlice.actions;
export default userSlice.reducer;