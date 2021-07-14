import errorReducer, { isError } from "./errorSlice";

describe("error reducer", () => {
  const initialState = {
    isError: false,
  };
  test("should handle initial state", () => {
    expect(errorReducer(undefined, { type: "unknown" })).toStrictEqual({
      isError: false,
    });
  });

  test("should handle error true", () => {
    const actual = errorReducer(initialState, isError());
    expect(actual.value).not.toBe(false);
  });
});
