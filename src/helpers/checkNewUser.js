import { endpoints, headersSecret } from "../endpoints";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";
import { loginCommerceJS } from "../redux/features/user/userSlice";

export const checkNewUser = async (userData, dispatch) => {
  if (!userData && !dispatch) return;

  const { email, phone, firstname, lastname, userId } = userData;

  try {
    await fetch(`${endpoints.customers}`, {
      method: "POST",
      headers: headersSecret,
      body: JSON.stringify({
        email,
        phone,
        firstname,
        lastname,
        external_id: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code && data.status_code === 422) {
          const errorMessage = data.error.errors.email[0];

          if (errorMessage === "The email address has already been taken.") {
            alert(`Welcome Back ${userData.firstname}`);
            fetch(`${endpoints.customers}?query=${email}`, {
              method: "GET",
              headers: headersSecret,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                localStorage.setItem("chec_user_id", data.data[0].id);
                dispatch(loginCommerceJS(data.data[0].id));
              })
              .catch((error) => alert(error.message));
          }
          dispatch(closeSidebar({ sidebar: false }));
        }
        localStorage.setItem("chec_user_id", data.data[0].id);
        dispatch(loginCommerceJS(data.id));
        dispatch(closeSidebar({ sidebar: false }));
      });
  } catch (error) {
    console.log(error);
  }
};
