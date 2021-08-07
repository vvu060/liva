import sidebarReducer, { openSidebar, closeSidebar } from "./sidebarSlice";

describe("sidebar reducer", () => {
  const initialState = {
    sidebar: false,
  };
  test("should handle initial state", () => {
    expect(sidebarReducer(undefined, { type: "unknown" })).toStrictEqual({
      sidebar: false,
    });
  });

  test("should handle sidebar open", () => {
    const actual = sidebarReducer(initialState, openSidebar());
    expect(actual.value).not.toBe(false);
  });

  test("should handle sidebar close", () => {
    const actual = sidebarReducer(initialState, closeSidebar());
    expect(actual.value).not.toBe(true);
  });
});
