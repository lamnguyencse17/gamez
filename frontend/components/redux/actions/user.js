import { SIGNUP_USER } from "./types";
import signUpRequest from "../../../requests/signUpRequest";

export const signUpUser = (signupDetails) => async (dispatch) => {
  const signUpResult = await signUpRequest(signupDetails);
  if (signUpResult.status) {
    dispatch({ type: SIGNUP_USER });
  }
  return signUpResult;
};