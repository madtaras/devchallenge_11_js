import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
  render() {
    const { field } = this.props;
    console.log('field');
    console.dir(this.props);
    const fieldItems = field.map((row) => (col) =>
      <div style={{height: 5, width: 5, backgroundColor: 'red'}}> </div>
    );

    return (
      <div>
        {fieldItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  field: state.field
});

const VisibleField = connect(mapStateToProps)(Field);

export default VisibleField
