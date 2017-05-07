import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
  render() {
    const { field } = this.props;
    const fieldItems = field.map((col) => {
      return col.map((item) => <div style={{height: 3, width: 3, backgroundColor: item ? '#212121' : '#fff'}}> </div>)
    });

    return (
      <div style={{height: 600, width: 600, display: 'flex', flexWrap: 'wrap'}}>
        {fieldItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  field: state.field
});

export default connect(mapStateToProps)(Field);
