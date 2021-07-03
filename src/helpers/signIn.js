import { auth } from "../firebase";
import { login } from "../redux/features/user/userSlice";
import { checkNewUser } from "./checkNewUser";

export const signIn = (provider, dispatch) => {
  if (!provider && !dispatch && !history) return;

  auth
    .signInWithPopup(provider)
    .then((result) => {
      let user = result.user;
      const fullName = user.displayName.split(" ");

      let userData = {
        email: user.email,
        phone: user.phoneNumber,
        firstname: fullName[0],
        lastname: fullName.pop(),
        photoUrl: user.photoURL,
        userId: user.uid,
      };

      dispatch(login(userData));
      checkNewUser(userData, dispatch);
    })
    .catch((error) => alert(error.message));
};
