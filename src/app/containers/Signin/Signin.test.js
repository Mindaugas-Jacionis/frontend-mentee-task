import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import logoTestio from '../../../assets/logotype-testio-light.png';
import { Signin } from './';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Signin />);

describe('<Signin /> container', () => {

  it('Should have logo', () => {
    expect(wrapper.contains(
      <div className="centrify-logo">
        <img src={logoTestio} alt="Testio logo" className="testio-logo" />
      </div>)).toEqual(true);
  })

  describe('When the form is submitted', () => {

    wrapper.find('#username').simulate(
      'change',
      {target:
        {name: 'username', value: 'test@gmail.com'}
      }
    )
    // fill in password field with cats
    wrapper.find('#password').simulate(
      'change',
      {target:
         {name: 'password', value: 'cats'}
      }
    )

    wrapper.find('#loginForm').simulate(
      'submit',
      {preventDefault() {}}
    )

    it('should change the username state', () => {
       expect(wrapper.state().username).toEqual('test@gmail.com');
    })

    it('should change the password state', () => {
       expect(wrapper.state().password).toEqual('cats');
    })

    it('should change the isLoading state', () => {
       expect(wrapper.state().isLoading).toEqual(true);
    })

  })
});
