import { shallow } from 'enzyme';
import * as React from 'react';

import LoginForm from '../';

describe('<LoginForm />', () => {

  test('displays without errors', () => {
    const wrapper = shallow(
      <LoginForm
        handleEmailChange={jest.fn()}
        handleSubmit={jest.fn()}
      />
    );
    expect(wrapper.find('form').length).toEqual(1);
  });

});
