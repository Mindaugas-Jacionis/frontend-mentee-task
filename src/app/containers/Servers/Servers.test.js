import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';
import Spinner from '../../components/Spinner';
import ServerList from '../../components/ServerList';
import { Servers } from './';

configure({ adapter: new Adapter() });

describe('<Servers /> container', () => {

  const wrapper = shallow(<Servers history="randomProp"/>);

  const centrifyingDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  it('Should have <Spinner /> component when fetching', () => {
    expect(wrapper.contains(
      <div style={centrifyingDiv}>
        <Spinner spinnerType="serverSpinner" />
      </div>)).toEqual(true);
  })

  it('Should have server <ServerList /> component after fetch', () => {
    wrapper.setState({ isFetching: false, servers: ['a','b'] });
    expect(wrapper.contains(
      <div style={centrifyingDiv}>
        <ServerList servers={['a','b']} />
      </div>)).toEqual(true);
  })

});
