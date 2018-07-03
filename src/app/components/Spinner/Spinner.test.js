import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import serverSpinner from '../../../assets/earth-spinner.gif';
import Spinner from './';

configure({ adapter: new Adapter() });

describe('<Spinner /> component', () => {


  it('Should show login spinner', () => {
    const wrapper = shallow(<Spinner spinnerType="loginSpinner" />);
    expect(wrapper.contains(<div className="bubbles_container">
        <div className="bubbles bubble_1"></div>
        <div className="bubbles bubble_2"></div>
        <div className="bubbles bubble_3"></div>
      </div>)).toEqual(true);
  });

  it('Should show server spinner', () => {
    const wrapper = shallow(<Spinner spinnerType="serverSpinner" />);
    expect(wrapper.contains(<img src={ serverSpinner } alt="Server Spinner" style={{ width: 500 }} />)).toEqual(true);
  });

  it('Should NOT show any spinner', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.contains(<div>Spinner type not defined.</div>)).toEqual(true);
  });

});
