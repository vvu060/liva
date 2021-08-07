import Enzyme, { shallow } from "enzyme";
import Logo from "./Logo";
test("renders without crashing", () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper.prop("alt")).toBe("Company Logo");
});
test("Logo have alt prop", () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper.prop("alt")).toBe("Company Logo");
});
test("Logo have height prop", () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper.prop("height")).toBe("auto");
});
