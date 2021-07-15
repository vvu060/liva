import { auth } from "../firebase";
import { login, logout } from "../redux/features/user/userSlice";
import { getCustomerId } from "./checkNewUser";

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
