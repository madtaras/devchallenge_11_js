import React, { Component } from 'react'
import { Provider } from 'react-redux'
import VisibleField from './VisibleField'
import configureStore from '../configureStore'

const store = configureStore();

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <VisibleField />
        </div>
      </Provider>
    );
  }
}
