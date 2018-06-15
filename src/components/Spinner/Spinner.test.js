import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Spinner from './';

configure({ adapter: new Adapter() });
/* eslint-disable  react/jsx-closing-tag-location */
describe('<Spinner/>', () => {
  it('should render divs with styling same as passed props', () => {
    const wrapper = shallow(<Spinner color="red" marginTop="30" />);
    expect(wrapper.contains(<div style={{ marginTop: '30' }} className="spinner">
      <div style={{ backgroundColor: 'red' }} className="rect1" />
      <div style={{ backgroundColor: 'red' }} className="rect2" />
      <div style={{ backgroundColor: 'red' }} className="rect3" />
      <div style={{ backgroundColor: 'red' }} className="rect4" />
      <div style={{ backgroundColor: 'red' }} className="rect5" />
    </div>)).toEqual(true);
  });

  it('should render divs with styling same as default props', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.contains(<div style={{ marginTop: '0' }} className="spinner">
      <div style={{ backgroundColor: 'white' }} className="rect1" />
      <div style={{ backgroundColor: 'white' }} className="rect2" />
      <div style={{ backgroundColor: 'white' }} className="rect3" />
      <div style={{ backgroundColor: 'white' }} className="rect4" />
      <div style={{ backgroundColor: 'white' }} className="rect5" />
    </div>)).toEqual(true);
  });
});
/* eslint-enable  react/jsx-closing-tag-location */
