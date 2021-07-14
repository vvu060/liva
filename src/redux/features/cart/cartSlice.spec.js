import cartReducer, { cartItems, getTotalAmount } from "./cartSlice";

describe("cart reducer", () => {
  const initialState = {
    items: null,
    totalAmount: "0",
  };
  test("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toStrictEqual({
      items: null,
      totalAmount: "0",
    });
  });

  test("should handle cart modifications", () => {
    const actual = cartReducer(initialState, cartItems());
    expect(actual.length).not.toBe(0);
  });

  test("should handle amount modifications", () => {
    const actual = cartReducer(initialState, getTotalAmount());
    expect(actual.value).not.toBe("0");
  });
});
