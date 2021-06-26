import testImg from '../../resources/testimage.png'
import React from "react";
import Avatar from "./Avatar";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
/**
 * Factory function to create a shallowWrapper for Banner component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
 const setup = (props = {}) => {
    return shallow(<Avatar {...props} />);
  };
  

test("renders without crashing", () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});

test("renders `image` passed as a prop", () => {
    const wrapper = setup({ image: "url" });
    const component = findByTestAttr(wrapper, "component-avatar");
    expect(component.length).toBe(1);
  });

test("Avatar have `title` prop", () => {
    const wrapper = setup();
    wrapper.setProps({ title: 'ashish mangla' });
    console.log(wrapper.debug());
});
test("set a test image for `image` prop", () => {
    const wrapper = setup();
    wrapper.setProps({ image: testImg });
    console.log(wrapper.debug());
});

