import React from "react";
import { shallow, mount } from "enzyme";
import Payment from "./Payment";
import { MemoryRouter, Route, useLocation } from "react-router-dom";
import { findByTestAttr } from "../../test/testUtils";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/payment?success=true",
    search: "payment?success=true",
  }),
}));

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useLocation: () => ({
//     pathname: "localhost:3000/canceled?success=true",
//     search: "payment?canceled=true",
//   }),
// }));

const setup = () => {
  return mount(<Payment />);
};

test("renders payment component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-payment");
  expect(component.length).toBe(1);
});

describe("payment successful", () => {
  const wrapper = setup();
  test("renders success icon", () => {
    const successIcon = findByTestAttr(wrapper, "success-icon");
    expect(successIcon.length).toBe(1);
  });

  test("renders success text", () => {
    const successText = findByTestAttr(wrapper, "success-text");
    expect(successText.length).toBe(1);
  });

  test("renders success message", () => {
    const successMessage = findByTestAttr(wrapper, "success-message");
    expect(successMessage.length).toBe(1);
  });

  test("renders go to order button", () => {
    const orderButton = findByTestAttr(wrapper, "order-button");
    expect(orderButton.length).toBe(1);
  });
});

describe("payment unsuccessful", () => {
  const wrapper = setup();

  test("renders failure icon", () => {
    const failureIcon = findByTestAttr(wrapper, "failure-icon");
    expect(failureIcon.length).toBe(1);
  });

  test("renders failure text", () => {
    const failureText = findByTestAttr(wrapper, "failure-text");
    expect(failureText.length).toBe(1);
  });

  test("renders failure message", () => {
    const failureMessage = findByTestAttr(wrapper, "failure-message");
    expect(failureMessage.length).toBe(1);
  });

  test("renders try again button", () => {
    const failureButton = findByTestAttr(wrapper, "failure-button");
    expect(failureButton.length).toBe(1);
  });
});

test("renders latest product component", () => {
  const wrapper = setup();
  const componentLatest = findByTestAttr(wrapper, "component-latest");
  expect(componentLatest.length).toBe(1);
});
