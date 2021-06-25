import { endpoints, headersSecret } from "../endpoints";

export const checkNewUser = async (userData, history) => {
  if (!userData && !history) return;

  const body = {
    email: userData.email,
    phone: userData.phone,
    firstname: userData.firstname,
    lastname: userData.lastname,
    external_id: userData.external_id,
  };

  try {
    await fetch(`${endpoints.customers}`, {
      method: "POST",
      headers: headersSecret,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code) {
          const errorMessage = data.error.errors.email[0];

          if (errorMessage === "The email address has already been taken.") {
            alert(`Welcome Back ${userData.firstname}`);
          }
          history.push("/");
        }
        history.push("/");
      });
  } catch (error) {
    console.log(error);
  }
};
