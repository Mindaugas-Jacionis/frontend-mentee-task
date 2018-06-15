import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Server from './';

configure({ adapter: new Adapter() });
/* eslint-disable  react/jsx-closing-tag-location */
describe('<Server/>', () => {
  it('should render paragraphs with content according to passed props', () => {
    const wrapper = shallow(<Server name="passed name" distance={30} />);
    expect(wrapper.contains(<div className="server">
      <p className="server__paragraph">passed name</p>
      <p className="server__paragraph">30 km</p>
    </div>)).toEqual(true);
  });

  it('should render paragraphs with content according to default props', () => {
    const wrapper = shallow(<Server />);
    expect(wrapper.contains(<div className="server">
      <p className="server__paragraph">error</p>
      <p className="server__paragraph">0 km</p>
    </div>)).toEqual(true);
  });
});
/* eslint-enable  react/jsx-closing-tag-location */
