import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { findByTestAttr, checkProps } from "./test/testUtils";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const initialState = { output: 10 };
let store;

test("renders non-empty component without crashing", () => {
  store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
