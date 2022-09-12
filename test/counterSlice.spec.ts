import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  cartReducer,
} from "../redux/cart.slice";
describe("counter reducer", () => {
  const initialState = {
    qty: 3,
  };
  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      qty: 0,
    });
  });

  it("should handle increment", () => {
    const actual = cartReducer(initialState, addToCart());
    expect(actual.qty).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = cartReducer(initialState, decrementQuantity());
    expect(actual.qty).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = cartReducer(initialState, incrementQuantity(2));
    expect(actual.qty).toEqual(5);
  });
});
