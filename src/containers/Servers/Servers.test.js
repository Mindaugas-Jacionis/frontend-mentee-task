import { Servers } from "./Servers";
import Server from "../../components/Server/Server";
import Spinner from "../../components/Spinner/Spinner";

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Servers/>", () => {
  it("should render two <Server/> components when passed array (length = 2) of servers as props", () => {
    const wrapper = shallow(<Servers servers={[1, 2]} token="123" />);
    expect(wrapper.find(Server)).toHaveLength(2);
  });

  it("should NOT render <Server/> component when servers array is not passed as props", () => {
    const wrapper = shallow(<Servers token="123" />);
    expect(wrapper.find(Server)).toHaveLength(0);
  });

  it("should render <Spinner/> component when 'loading={true}' passed as props", () => {
    const wrapper = shallow(<Servers loading={true} />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("should render error message component when 'error={true}' passed as props", () => {
    const wrapper = shallow(<Servers error={true} />);
    expect(
      wrapper.contains(
        <p
          style={{
            color: "red",
            margiTop: "30px",
            textAlign: "center"
          }}
        >
          Something went wrong
        </p>
      )
    ).toEqual(true);
  });
});