import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);
describe("HomePage", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      cart: "sample text",
    });

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  it("should render the home", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
