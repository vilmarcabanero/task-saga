/**
 * Test the HomePage
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import AuthPage from '../index';
import configureStore from '../../../configureStore';

describe('<AuthPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Should render and match the snapshot', () => {
    const userData = {
      firstName: '',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AuthPage authPageState={{ userData }} />
        </IntlProvider>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
