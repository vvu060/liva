import userReducer, { login, logout, loginCommerceJS } from "./userSlice";

describe("user reducer", () => {
  const initialState = {
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
    external_id: "",
    photoUrl: "",
    userId: "",
    checUserId: "",
  };

  const loggedInState = {
    email: "vvo060@gmail.com",
    phone: "",
    firstname: "",
    lastname: "",
    external_id: "",
    photoUrl: "",
    userId: "",
    checUserId: "abcjsakhj",
  };

  test("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toStrictEqual({
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      external_id: "",
      photoUrl: "",
      userId: "",
      checUserId: "",
    });
  });

  test("should handle user login", () => {
    const actual = userReducer(loggedInState, login());
    console.log(actual.debug());
    expect(actual.email.value).not.toBe("");
  });

  test("should handle user logout", () => {
    const actual = userReducer(initialState.email, logout());
    expect(actual.value).toBe("");
  });
});
