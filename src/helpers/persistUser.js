import { auth } from "../firebase";
import { login, logout } from "../redux/features/user/userSlice";

export const persistUser = (dispatch) => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      console.log(authUser);
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
    } else {
      dispatch(logout());
    }
  });
};
