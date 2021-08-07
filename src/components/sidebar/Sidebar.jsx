import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from "@material-ui/icons/Cancel";
import { AnimatePresence, motion } from "framer-motion";

import { closeSidebar } from "../../redux/features/sidebar/sidebarSlice";
import { logout, selectUserEmail } from "../../redux/features/user/userSlice";
import { signIn } from "../../helpers/signIn";
import { auth, providerFacebook, providerGoogle } from "../../firebase";

import Logo from "../logo/Logo";

import style from "./Sidebar.module.scss";

const Sidebar = ({ sidebar = false }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const history = useHistory();

  /**
   * Functions to handle user login with Google and Facebook.
   * @function signInWithGoogle,signInWithFacebook
   * @param {}
   * @returns {}
   */
  const signInWithGoogle = () => {
    signIn(providerGoogle, dispatch);
  };

  const signInWithFacebook = () => {
    signIn(providerFacebook, dispatch, history);
  };

  /**
   * Functions to handle user logout.
   * @function signOut
   * @param {}
   * @returns {} - user signed out.
   */
  const signOut = () => {
    if (userEmail) {
      auth.signOut().then(() => {
        dispatch(logout());
        dispatch(closeSidebar({ sidebar: false }));
        localStorage.removeItem("chec_user_id");
      });
    }
  };

  /**
   * Function to dispatch closeSidebar action to redux store.
   * @function hideSidebar
   * @param {}
   * @returns {}
   */
  const hideSidebar = () => {
    dispatch(closeSidebar({ sidebar: false }));
  };

  return (
    <AnimatePresence data-test="component-sidebar">
      {sidebar && (
        <Fragment>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            className={style.sidebar}
          >
            <div data-test="sidebar-header" className={style.sidebar__header}>
              <h2 onClick={signOut}>{userEmail ? "Sign Out" : "Sign In"}</h2>
              <CancelIcon
                onClick={hideSidebar}
                className={style.sidebar__close}
              />
            </div>
            <div data-test="sidebar-body" className={style.sidebar__body}>
              <h3>Welcome to</h3>
              <Logo width={100} alt="Liva Logo" />
              <button onClick={signInWithGoogle}>
                <div className={style.sidebar__button}>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                    loading="lazy"
                    alt="google logo"
                  />{" "}
                  Sign In With Google
                </div>
              </button>
              <button onClick={signInWithFacebook}>
                <div className={style.sidebar__button}>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
                    loading="lazy"
                    alt="facebook logo"
                  />{" "}
                  Sign In With Facebook
                </div>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={hideSidebar}
            className={style.sidebar__outside}
          />
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
