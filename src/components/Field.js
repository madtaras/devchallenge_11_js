import React, { Component } from 'react'
import { connect } from 'react-redux'

const fieldStyles = {
  height: 600,
  width: 600,
  border: '1px solid #212121',
};

class Field extends Component {
  render() {
    const { field } = this.props;
    const fieldItems = field.map((col) => {
      return col.map((item) => {
        return <div style={{height: 3, width: 3, float: 'left',
          backgroundColor: item ? '#212121' : '#fff',}}> </div>
      })
    });

    return (
      <div style={fieldStyles}>
        {fieldItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  field: state.field
});

export default connect(mapStateToProps)(Field);
