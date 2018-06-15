import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Spinner from './';

configure({ adapter: new Adapter() });
/* eslint-disable  react/jsx-closing-tag-location */
describe('<Spinner/>', () => {
  it('should render divs with styling according to passed props', () => {
    const wrapper = shallow(<Spinner color="red" mode="fullscreen" size="large" />);
    expect(wrapper.contains(<div
      style={{
            height: '100%',
            width: '100%',
            position: 'relative',
          }}
    >
      <div
        style={{
              height: '70px',
              width: '140px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
            }}
        className="spinner"
      >
        <div
          style={{ backgroundColor: 'red' }}
          className="spinner__rect spinner__rect--1"
        />
        <div
          style={{ backgroundColor: 'red' }}
          className="spinner__rect spinner__rect--2"
        />
        <div
          style={{ backgroundColor: 'red' }}
          className="spinner__rect spinner__rect--3"
        />
        <div
          style={{ backgroundColor: 'red' }}
          className="spinner__rect spinner__rect--4"
        />
        <div
          style={{ backgroundColor: 'red' }}
          className="spinner__rect spinner__rect--5"
        />
      </div>
    </div>)).toEqual(true);
  });

  it('should render divs with styling according to default props', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.contains(<div style={{}}>
      <div
        style={{
              height: '35px',
              width: '70px',
            }}
        className="spinner"
      >
        <div
          style={{ backgroundColor: 'white' }}
          className="spinner__rect spinner__rect--1"
        />
        <div
          style={{ backgroundColor: 'white' }}
          className="spinner__rect spinner__rect--2"
        />
        <div
          style={{ backgroundColor: 'white' }}
          className="spinner__rect spinner__rect--3"
        />
        <div
          style={{ backgroundColor: 'white' }}
          className="spinner__rect spinner__rect--4"
        />
        <div
          style={{ backgroundColor: 'white' }}
          className="spinner__rect spinner__rect--5"
        />
      </div>
    </div>)).toEqual(true);
  });
});
/* eslint-enable  react/jsx-closing-tag-location */
