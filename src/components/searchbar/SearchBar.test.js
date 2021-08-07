import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import { findByTestAttr } from "../../test/testUtils";

const setup = () => {
  return shallow(<SearchBar />);
};

test("renders search bar without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-searchbar");
  expect(component.length).toBe(1);
});

describe("renders form", () => {
  const wrapper = setup();

  test("renders input field", () => {
    const inputField = findByTestAttr(wrapper, "input-field");
    expect(inputField.length).toBe(1);
  });

  test("renders search button", () => {
    const searchButton = findByTestAttr(wrapper, "search-button");
    expect(searchButton.length).toBe(1);
  });
});

describe("renders search results section", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
    const input = findByTestAttr(wrapper, "input-field");
    input.simulate("onChange", { target: { value: "Seeds" } });
  });

  test("renders search results div", () => {
    const searchResults = findByTestAttr(wrapper, "search-results");
    expect(searchResults.length).toBe(1);
  });

  test("renders search results image", () => {
    const resultsImage = findByTestAttr(wrapper, "results-image");
    expect(resultsImage.length).toBe(1);
  });

  test("renders search results details", () => {
    const resultsDetails = findByTestAttr(wrapper, "results-details");
    expect(resultsDetails.length).toBe(1);
  });
});
