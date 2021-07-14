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
    const actual = userReducer(initialState.email, login());
    expect(actual.length).not.toBe("");
  });

  test("should handle user logout", () => {
    const actual = userReducer(initialState.email, logout());
    expect(actual.value).toBe("");
  });

  test("should handle amount modifications", () => {
    const actual = userReducer(initialState.checUserId, loginCommerceJS());
    expect(actual.value).not.toBe("");
  });
});
