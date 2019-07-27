import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("test", () => {
  it("should render Header w/o crash", () => {
    shallow(<Header />);
  });
});
