import{ shallow } from "enzyme";
import Footer from "./Footer";
test("renders Footer without crashing", () => {
  const wrapper = shallow(<Footer />);
  console.log(wrapper.debug());
});
test("renders Footer bottom", () => {
    const wrapper = shallow(<Footer />);
    const footerBottomText = wrapper.find('[data-testid="footerbottom"]').text();
    console.log(footerBottomText);
  });
  
