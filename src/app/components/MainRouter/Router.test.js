import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Servers from '../../containers/Servers';
import Signin from '../../containers/Signin';
import Router from './';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Router />);

describe('Main <Router /> component', () => {
  it('Should contain {Signin} route', () => {
    expect(wrapper.contains(<Route exact path="/" component={Signin} />)).toEqual(true);
  });
  it('Should contain {Servers} route', () => {
    expect(wrapper.contains(<Route path="/servers" component={Servers} />)).toEqual(true);
  });
  it('Should contain redirect', () => {
    expect(wrapper.find(Route).last().prop("path")).toEqual('*');
  });
});
