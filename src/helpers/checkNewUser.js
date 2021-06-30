import { endpoints, headersSecret } from "../endpoints";
import useFetch from "../hooks/useFetch";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";

export const checkNewUser = async (userData, dispatch) => {
  if (!userData && !dispatch) return;

  const { email, phone, firstname, lastname, external_id } = userData;

  try {
    await fetch(`${endpoints.customers}`, {
      method: "POST",
      headers: headersSecret,
      body: JSON.stringify({
        email,
        phone,
        firstname,
        lastname,
        external_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code && data.status_code === "422") {
          const errorMessage = data.error.errors.email[0];

          if (errorMessage === "The email address has already been taken.") {
            alert(`Welcome Back ${userData.firstname}`);
          }
          dispatch(closeSidebar({ sidebar: false }));
        }
        dispatch(closeSidebar({ sidebar: false }));
      });
  } catch (error) {
    console.log(error);
  }
};
