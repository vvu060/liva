import React from "react";
import { providerFacebook, providerGoogle } from "../../firebase";
import Button from "../../components/button/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { signIn } from "../../helpers/signIn";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signIn(providerGoogle, dispatch, history);
  };

  const signInWithFacebook = () => {
    signIn(providerFacebook, dispatch, history);
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
