import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleCell } from '../actions'

const fieldStyles = {
  height: 600,
  width: 600,
  border: '1px solid #212121',
};

class Field extends Component {
  render() {
    const { field } = this.props;
    const { toggleCell } = this.props;
    const fieldItems = field.map((col, x) => {
      return col.map((item, y) => {
        // Keep Cell jsx here for better performance
        return <div style={{height: 3, width: 3, float: 'left',
          backgroundColor: item ? '#212121' : '#fff',}}
                    onClick={() => toggleCell({x: x, y: y})}> </div>
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
  { toggleCell }
)(Field);
