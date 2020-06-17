import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import createStore from './store';
import Main from './components/Main';

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
});

const store = createStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </MuiThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default App;
