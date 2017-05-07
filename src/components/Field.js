import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
  render() {
    const { field } = this.props;
    const fieldItems = field.map((col) => {
      return col.map((item) => <div style={{height: 3, width: 3, float: 'left', backgroundColor: item ? '#212121' : '#fff'}}> </div>)
    });

    return (
      <div style={{height: 600, width: 600}}>
        {fieldItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  field: state.field
});

export default connect(mapStateToProps)(Field);
