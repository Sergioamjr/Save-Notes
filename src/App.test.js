import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import App from "./routes";
const mockStore = configureMockStore();
const store = mockStore({});

it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
