import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import logoTestio from '../../../assets/logotype-testio.png';
import icoLogout from '../../../assets/ico-logout.svg';
import ReactSVG from 'react-svg';
import Header from './';

configure({ adapter: new Adapter() });

describe('<Header /> component', () => {
  const wrapper = shallow(<Header logoutFunc={() => {}}/>);

  it('Should show logo', () => {
    expect(wrapper.contains(<div><img src={logoTestio} alt="Testio logo" style={{ width: 110 }}/></div>)).toEqual(true);
  });

  it('Should contain logout button with icon', () => {
    expect(wrapper.find('.logout-btn').contains(<ReactSVG path={icoLogout} />)).toEqual(true);
  });

});
