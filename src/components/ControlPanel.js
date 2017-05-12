import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  start,
  pause,
  stop,
  createRandomGeneration
} from '../actions/'
import RaisedButton from 'material-ui/RaisedButton';

const controlPanelStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const commonButtonStyle = {
  margin: 12,
};

class ControlPanel extends Component {
  render() {
    const { isOn, isFieldEmpty } = this.props;
    const {
      start, pause, stop,
      createRandomGeneration
    } = this.props;

    return (
      <div style={controlPanelStyles}>
        <RaisedButton label="Fill with random cells" style={commonButtonStyle} disabled={isOn}
          onTouchTap={createRandomGeneration} />
        <RaisedButton label="Start" style={commonButtonStyle} onTouchTap={start} disabled={isOn || isFieldEmpty} />
        <RaisedButton label="Pause" style={commonButtonStyle} onTouchTap={pause} disabled={!isOn} />
        <RaisedButton label="Stop" style={commonButtonStyle} onTouchTap={stop} disabled={!isOn} />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isOn: state.isOn,
    isFieldEmpty: state.isFieldEmpty
  }),
  {
      start,
      pause,
      stop,
      createRandomGeneration
  }
)(ControlPanel);
