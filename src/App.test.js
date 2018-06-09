import {App} from "./App";
import Login from "./containers/Login/Login";
import Servers from "./containers/Servers/Servers";
import {Route} from "react-router-dom";

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<App/>",()=>{
    it("should render Route with component={Login} if there is no token saved in localStorage", ()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.contains(<Route path="/" exact component={Login} />)).toEqual(true);
    });
    it("should NOT render Route with component={Servers} if there is no token saved in localStorage", ()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.contains(<Route path="/" exact component={Servers} />)).toEqual(false);
    });

});