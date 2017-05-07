import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/'

class ControlPanel extends Component {
  render() {
    return (
      <div>
        Control panel
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
  })
)(ControlPanel);
