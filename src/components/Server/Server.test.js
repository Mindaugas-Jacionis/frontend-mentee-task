import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Server from './';

configure({ adapter: new Adapter() });
/* eslint-disable  react/jsx-closing-tag-location */
describe('<Server/>', () => {
  it('should render divs with content according to passed props', () => {
    const wrapper = shallow(<Server name="passed name" distance={30} />);
    expect(wrapper.contains(<div className="server-container">
      <div>passed name</div>
      <div>30 km</div>
    </div>)).toEqual(true);
  });

  it('should render divs with content according to default props', () => {
    const wrapper = shallow(<Server />);
    expect(wrapper.contains(<div className="server-container">
      <div>error</div>
      <div>0 km</div>
    </div>)).toEqual(true);
  });
});
/* eslint-enable  react/jsx-closing-tag-location */
