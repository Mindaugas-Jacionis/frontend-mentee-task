import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import ServerPage from '../../containers/ServerPage';
import SigninPage from '../../containers/SigninPage';
import SingleServer from '../../containers/SingleServer';
import Router from './';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Router />);

describe('<MainRouter /> component', () => {
  it('Should contain {SigninPage} route', () => {
    expect(wrapper.contains(<Route exact path="/" component={SigninPage} />)).toEqual(true);
  });
  it('Should contain {ServerPage} route', () => {
    expect(wrapper.contains(<Route exact path="/servers" component={ServerPage} />)).toEqual(true);
  });
  it('Should contain {SingleServer} route', () => {
    expect(wrapper.contains(<Route path='/servers/:id' component={SingleServer} />)).toEqual(true);
  });
  it('Should contain redirect', () => {
    expect(wrapper.find(Route).last().prop("path")).toEqual('*');
  });
});
