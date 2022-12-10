import {
    loginFailure,
    loginStart,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailure
} from "./userReducer";
import {
    publicRequest
} from "../requestMethod";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        // console.log(res.data)
    } catch (err) {
        dispatch(loginFailure(err.response.data.message));
    }
};
export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        if (err.response.data.message.code === 11000) {
            dispatch(registerFailure({message: `Email: ${err.response.data.message?.keyValue?.email} already exists`}));

        } else {
            dispatch(registerFailure(err.response.data.message));
        }
    }
};