import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';

import { RootContainer } from './';
import { Login, Servers } from '../';

configure({ adapter: new Adapter() });

describe('<RootContainer/>', () => {
  it('should render Route with component={Login} if there is no token saved in localStorage', () => {
    const wrapper = shallow(<RootContainer />);
    expect(wrapper.contains(<Route path="/" exact component={Login} />)).toEqual(true);
  });
  it('should NOT render Route with component={Servers} if there is no token saved in localStorage', () => {
    const wrapper = shallow(<RootContainer />);
    expect(wrapper.contains(<Route path="/servers" exact component={Servers} />)).toEqual(false);
  });
});
