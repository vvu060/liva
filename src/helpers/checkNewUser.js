import axios from "axios";
import { endpoints, headersSecret } from "../endpoints";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";
import { loginCommerceJS } from "../redux/features/user/userSlice";

/**
 * Function to check if user is new or existing one.
 * @function checkNewUser
 * @param {userData, dispatch}  - takes userData, dispatch as parameter.
 * @returns {} if new user generates a commerce JS customer Id.
 */
export const checkNewUser = async (userData, dispatch) => {
  if (!userData && !dispatch) return;

  try {
    const { data } = await axios.post(`${endpoints.customers}`, userData, {
      headers: headersSecret,
    });

    localStorage.setItem("chec_user_id", data.id);

    dispatch(loginCommerceJS(data.id));
    dispatch(closeSidebar({ sidebar: false }));
  } catch (error) {
    if (error.response && error.response.status === 422) {
      getCustomerId(userData.email, dispatch);

      dispatch(closeSidebar({ sidebar: false }));
    }
  }
};

/**
 * Function to retrieve customer Id of an existing customer.
 * @function getCustomerId
 * @param {email, dispatch} - takes email, dispatch as parameter.
 * @returns {} returns customer Id.
 */
export const getCustomerId = async (email, dispatch) => {
  try {
    const { data } = await axios.get(`${endpoints.customers}?query=${email}`, {
      headers: headersSecret,
    });

    localStorage.setItem("chec_user_id", data.data[0].id);
    dispatch(loginCommerceJS(data.data[0].id));
  } catch (error) {
    alert(error.message);
  }
};
