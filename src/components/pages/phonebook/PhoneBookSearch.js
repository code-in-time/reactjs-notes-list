import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionPhoneBookSearch } from '../../../Reducers/phonebookReducer';
import { selectorPhoneBookGetFirstNameNumber, selectorGetTheLoggedInUser } from '../../../Reducers/selectors';

class PhoneBookSearch extends Component {
  render() {
    return (
      <div className="PhoneBookEntryAdd card card-body bg-light">
        <h4>{this.props.firstNameNumber}</h4>
        <h5>{this.props.loggedInUser}</h5>
        <h3>Search</h3>
        <div className="row">
          <div className="col">
            <input
              value={this.props.phoneBookReducerSearchTerm}
              onChange={e => this.props.actionPhoneBookSearch(e.target.value)}
              placeholder="enter a searm term here"
              type="text"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

PhoneBookSearch.propTypes = {
  phoneBookReducerSearchTerm: PropTypes.string.isRequired,
  actionPhoneBookSearch: PropTypes.func.isRequired,
  firstNameNumber: PropTypes.string.isRequired,
  loggedInUser: PropTypes.string.isRequired,
};

// Using redux the phonebookReducer properties are now props
const mapStateToProps = state => ({
  phoneBookReducerSearchTerm: state.phoneBookReducer.searchTerm,
  firstNameNumber: selectorPhoneBookGetFirstNameNumber(state),
  loggedInUser: selectorGetTheLoggedInUser(state),
});

const mapDispatchToProps = {
  actionPhoneBookSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookSearch);
