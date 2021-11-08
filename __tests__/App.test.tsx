import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/pages/App';
import { Provider } from 'react-redux';

import { store } from '../src/redux/store';

describe('my function or component', () => {
  test('does the following', () => {});
});

describe('true is truthy and false falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
