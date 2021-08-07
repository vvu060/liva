import React from "react";
import { shallow, mount } from "enzyme";
import Home from "./Home";
import { findByTestAttr } from "../../test/testUtils";

test("renders the Home Component without crashing", () => {
  const wrapper = shallow(<Home />);
  const component = findByTestAttr(wrapper, "component-home");
  expect(component.length).toBe(1);
});

describe("renders children components", () => {
  // const wrapper = mount(<Home />);
  // test("renders the Icon Section Component", () => {
  //   const iconSectionComponent = findByTestAttr(
  //     wrapper,
  //     "component-icon-section"
  //   );
  //   expect(iconSectionComponent.length).toBe(1);
  // });
  // test("renders Product Row component", () => {
  //   const productsRowComponent = findByTestAttr(
  //     wrapper,
  //     "component-products-row"
  //   );
  //   expect(productsRowComponent.length).toBe(1);
  // });
});
