import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Login } from './';
import { Spinner } from '../../components';

configure({ adapter: new Adapter() });

describe('<Login/>', () => {
  it("should render <Spinner/> component when passed 'loading={true}' as props", () => {
    const wrapper = shallow(<Login loading />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("should NOT render <Spinner/> component when passed 'loading={false}' as props", () => {
    const wrapper = shallow(<Login loading={false} />);
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });
});
