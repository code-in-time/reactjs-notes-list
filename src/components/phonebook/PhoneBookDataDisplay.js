import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PhoneBookEntryDataDisplay extends Component {
  /**
   * This will render the contents of the phone book.
   */
  buildRowData() {
    return this.props.phoneBookReducerData.map((item, i) => (
      <tr key={i}>
        <td>{item.name}</td>
        <td>{item.phoneNumber}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="PhoneBookEntryDataDisplay card card-body bg-light">
        <h1>{this.props.phoneBookReducerSearchTerm} : search term</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>{this.buildRowData()}</tbody>
        </table>
      </div>
    );
  }
}


PhoneBookEntryDataDisplay.propTypes = {
  phoneBookReducerData: PropTypes.array.isRequired,
  phoneBookReducerSearchTerm: PropTypes.string.isRequired,
};

// Using redux the phonebookReducer properties are now props
const mapStateToProps = state => ({
  phoneBookReducerData: state.phoneBookReducer.data,
  phoneBookReducerSearchTerm: state.phoneBookReducer.searchTerm,
});

export default connect(mapStateToProps)(PhoneBookEntryDataDisplay);
