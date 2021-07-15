import { endpoints, headersSecret } from "../endpoints";
import axios from "axios";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";
import { loginCommerceJS } from "../redux/features/user/userSlice";

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
      alert(`Welcome Back ${userData.firstname}`);
      getCustomerId(userData.email, dispatch);

      dispatch(closeSidebar({ sidebar: false }));
    }
  }
};

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
