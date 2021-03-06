import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VisibleField from './Field'
import ControlPanel from './ControlPanel'

const containerStyles = {
  height: '100vh',
  width: 1000,
  background: '#fff',
  borderLeft: '1px solid #d6d6d6',
  borderRight: '1px solid #d6d6d6',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={containerStyles}>
          <VisibleField />
          <ControlPanel />
        </div>
      </MuiThemeProvider>
    );
  }
}
