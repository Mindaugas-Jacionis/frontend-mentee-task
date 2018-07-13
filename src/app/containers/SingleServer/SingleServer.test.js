import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../../components';
import { SingleServer } from './';

configure({ adapter: new Adapter() });

describe('<SingleServer /> container', () => {

  const wrapper = shallow(<SingleServer history="randomProp" />);

  it('Should warn if server was not loaded', () => {
    expect(wrapper.contains(
      <h2>Server has not been loaded. Please go back and try again.</h2>
    )).toEqual(true);
  })

  it('Should show server name and distance', () => {
    wrapper.setState({ serverInfo: {name: 'test', distance: '1000'} });
    expect(wrapper.contains(
      <div>
        <h1>test</h1>
        <h2>Distance: 1000 km</h2>
      </div>
    )).toEqual(true);
  })

  it('Should contain link for returning', () => {
    expect(wrapper.contains(
      <Link to='/servers' className="back-link" >
        <SvgIcon iconType="backIcon" className="ico-back" />
        <div className="backText">Back</div>
      </Link>
    )).toEqual(true);
  })

});
