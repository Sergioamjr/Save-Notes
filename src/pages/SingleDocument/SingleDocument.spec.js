import React from "react";
import { shallow } from "enzyme";
import SingleDocument from "./SingleDocument";

const mockProps = {
  dispatch: jest.fn(),
  notes: {
    selectedId: 0
  }
};

describe("<SingleDocument />", () => {
  it("should render SingleDocument w/o crash", () => {
    shallow(<SingleDocument {...mockProps} />);
  });

  it("should update store on componentdidmount", () => {
    const wrapper = shallow(<SingleDocument {...mockProps} />);
    jest.spyOn(wrapper.instance(), "updateSelectedId");
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().updateSelectedId).toHaveBeenCalledTimes(1);
  });

  it("should update store on componentdidupdate", () => {
    const wrapper = shallow(<SingleDocument {...mockProps} />);
    jest.spyOn(wrapper.instance(), "updateSelectedId");
    wrapper.setProps({ id: 123 });
    expect(wrapper.instance().updateSelectedId).toHaveBeenCalledTimes(1);
  });
});
