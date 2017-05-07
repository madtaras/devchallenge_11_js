import React, { Component } from 'react'
import VisibleField from './Field'
import ControlPanel from './ControlPanel'

export default class App extends Component {
  render() {
    return (
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
    );
  }
}