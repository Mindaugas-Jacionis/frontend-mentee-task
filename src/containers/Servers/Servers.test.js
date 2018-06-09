import {Servers} from "./Servers";
import Server from "../../components/Server/Server";

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Servers/>",()=>{
    it("should render two <Server/> components when passed array (length = 2) of servers as props", ()=>{
        const wrapper = shallow(<Servers servers={[1,2]} token="123"/>);
        expect(wrapper.find(Server)).toHaveLength(2);
    });

    it("should NOT render <Server/> component when servers array is not passed as props", ()=>{
        const wrapper = shallow(<Servers token="123"/>);
        expect(wrapper.find(Server)).toHaveLength(0);
    });


});