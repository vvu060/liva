import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Footer from "./Footer";
/**
 * Factory function to create a shallowWrapper for Banner component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Footer {...props} />);
};

test("renders footer without crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-footer");
  expect(component.length).toBe(1);
});

describe("renders footer details", () => {
  const wrapper = setup();

  test("renders company information", () => {
    const footerInfo = findByTestAttr(wrapper, "footer-info");
    expect(footerInfo.length).toBe(1);
  });

  test("renders footer links", () => {
    const footerLinks = findByTestAttr(wrapper, "footer-links");
    expect(footerLinks.length).toBe(2);
  });
});
