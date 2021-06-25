import React from "react";
import { auth, providerGoogle } from "../../firebase";
import Button from "../../components/button/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(providerGoogle)
      .then((result) => {
        let user = result;

        dispatch(
          login({
            email: user.additionalUserInfo.profile.email,
            phone: user.user.phoneNumber,
            firstname: user.additionalUserInfo.profile.given_name,
            lastname: user.additionalUserInfo.profile.family_name,
            external_id: user.additionalUserInfo.profile.id,
            photo: user.photoURL,
            userId: user.uid,
          })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Button
        onClick={signInWithGoogle}
        classes="btn btn-primary"
        name="Sign In With Google"
      />
    </div>
  );
};

export default Login;
