import { auth } from "../firebase";
import { login, logout } from "../redux/features/user/userSlice";
import { getCustomerId } from "./checkNewUser";

/**
 * Function to persist user on page reload.
 * @function persistUser
 * @param { dispatch } - takes dispatch as parameter.
 * @returns {} dispatches user info to redux store.
 */
export const persistUser = (dispatch) => {
  const chec_user_id = localStorage.getItem("chec_user_id");

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      const userData = {
        email: authUser.email,
        phone: authUser.phoneNumber,
        firstname: authUser.given_name,
        lastname: authUser.family_name,
        external_id: authUser.id,
        photoUrl: authUser.photoURL,
        userId: authUser.uid,
      };

      dispatch(login(userData));

      if (!chec_user_id) {
        getCustomerId(userData.email, dispatch);
      }
    } else {
      dispatch(logout());
    }
  });
};
