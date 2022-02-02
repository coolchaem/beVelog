import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/Theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
