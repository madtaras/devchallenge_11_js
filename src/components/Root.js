import React, { Component } from 'react'
import { Provider } from 'react-redux'
import VisibleField from './VisibleField'
import ControlPanel from './ControlPanel'
import configureStore from '../configureStore'

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{
          height: '100vh',
          width: 1000,
          background: '#fff',
          borderLeft: '1px solid #d6d6d6',
          borderRight: '1px solid #d6d6d6',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <VisibleField />
          <ControlPanel />
        </div>
      </Provider>
    );
  }

  componentWillMount() {
    document.body.style.margin = 0;
    document.body.style.background = '#f6f6f6';
  }
}
