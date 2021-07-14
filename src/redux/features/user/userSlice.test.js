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
    expect(
      userReducer(
        initialState,
        login({
          email: "vvu060@gmail.com",
          phone: "9902036899",
          firstname: "Vishal",
          lastname: "Urankar",
          external_id: "afsdfsd",
          photoUrl: "sdfsdf",
          userId: "sdfsdfsdf",
          checUserId: "fdsfdsf",
        })
      )
    ).not.toBe({});
  });

  test("should handle user logout", () => {
    expect(userReducer(initialState, logout())).toEqual({
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

  test("should handle user commerce js id", () => {
    expect(
      userReducer(
        initialState,
        loginCommerceJS({
          email: "vvu060@gmail.com",
          phone: "9902036899",
          firstname: "Vishal",
          lastname: "Urankar",
          external_id: "afsdfsd",
          photoUrl: "sdfsdf",
          userId: "sdfsdfsdf",
          checUserId: "fdsfdsf",
        })
      )
    ).not.toBe({});
  });
});
