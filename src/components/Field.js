import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCell } from '../actions'
import { bindActionCreators } from 'redux'

const fieldStyles = {
  height: 600,
  width: 600,
  border: '1px solid #212121',
};

class Field extends Component {
  render() {
    const { field } = this.props;
    const { toggleCell } = this.props;
    const fieldItems = field.map((col, i) => {
      return col.map((item, j) => {
        return <div style={{height: 3, width: 3, float: 'left',
          backgroundColor: item ? '#212121' : '#fff',}}
          onClick={() => toggleCell(i, j)}> </div>
      })
    });

    return (
      <div style={fieldStyles}>
        {fieldItems}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    field: state.field
  }),
  (dispatch) => bindActionCreators({ toggleCell }, dispatch)
)(Field);
