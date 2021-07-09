import React from "react";
import { shallow } from "enzyme";
import Address from "./Address";
import { findByTestAttr, checkProps } from "../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const setup = () => {
  return shallow(<Address />);
};

test("renders address component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-address");
  expect(component.length).toBe(1);
});

describe("renders all input fields", () => {
  const wrapper = setup();

  test("renders name field", () => {
    const name = findByTestAttr(wrapper, "name-field");
    expect(name.length).toBe(1);
  });

  test("renders phone number field", () => {
    const name = findByTestAttr(wrapper, "phoneNumber-field");
    expect(name.length).toBe(1);
  });

  test("renders address1 field", () => {
    const name = findByTestAttr(wrapper, "address1-field");
    expect(name.length).toBe(1);
  });

  test("renders address2 field", () => {
    const name = findByTestAttr(wrapper, "address2-field");
    expect(name.length).toBe(1);
  });

  test("renders city field", () => {
    const name = findByTestAttr(wrapper, "city-field");
    expect(name.length).toBe(1);
  });

  test("renders state field", () => {
    const name = findByTestAttr(wrapper, "state-field");
    expect(name.length).toBe(1);
  });

  test("renders pincode field", () => {
    const name = findByTestAttr(wrapper, "pincode-field");
    expect(name.length).toBe(1);
  });

  test("renders payment field", () => {
    const name = findByTestAttr(wrapper, "payment-field");
    expect(name.length).toBe(1);
  });

  test("renders checkout button", () => {
    const name = findByTestAttr(wrapper, "checkout-button");
    expect(name.length).toBe(1);
  });
});
