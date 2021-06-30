import { auth } from "../firebase";
import { login } from "../redux/features/user/userSlice";
import { checkNewUser } from "./checkNewUser";

export const signIn = (provider, dispatch) => {
  if (!provider && !dispatch && !history) return;

  auth
    .signInWithPopup(provider)
    .then((result) => {
      let user = result;

      let userData = {
        email: user.additionalUserInfo.profile.email,
        phone: user.user.phoneNumber,
        firstname: user.additionalUserInfo.profile.given_name,
        lastname: user.additionalUserInfo.profile.family_name,
        external_id: user.additionalUserInfo.profile.id,
        photoUrl: user.user.photoURL,
        userId: user.user.uid,
      };

      dispatch(login(userData));
      checkNewUser(userData, dispatch);
    })
    .catch((error) => alert(error.message));
};
