import loadingReducer, { isLoading } from "./loadingSlice";

describe("loading reducer", () => {
  const initialState = {
    isLoading: false,
  };
  test("should handle initial state", () => {
    expect(loadingReducer(undefined, { type: "unknown" })).toStrictEqual({
      isLoading: false,
    });
  });

  test("should handle loading true", () => {
    const actual = loadingReducer(initialState, isLoading());
    expect(actual.value).not.toBe(false);
  });
});
