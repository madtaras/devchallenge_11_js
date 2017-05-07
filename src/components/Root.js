import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from '../configureStore'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Set up store
const store = configureStore();

// Set up interval for generations updating
let interval = null;
store.subscribe(() => {
  if (store.getState().isOn && interval === null) {
    interval = setInterval(() => {
      store.dispatch({
        type: 'UPDATE_GENERATION'
      });
    }, 500);
  }
  if (!store.getState().isOn && interval !== null) {
    clearInterval(interval);
    interval = null;
  }
});

const appWrapperStyles = {
  height: '100vh',
  width: 1000,
  background: '#fff',
  borderLeft: '1px solid #d6d6d6',
  borderRight: '1px solid #d6d6d6',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
};

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={appWrapperStyles}>
          <App />
        </div>
      </Provider>
    );
  }

  componentWillMount() {
    document.body.style.margin = 0;
    document.body.style.background = '#f6f6f6';
  }
}
