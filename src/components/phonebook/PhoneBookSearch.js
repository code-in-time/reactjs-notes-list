import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionPhoneBookSearch } from '../../actions/phoneBookActions';

class PhoneBookSearch extends Component {
  render() {
    return (
      <div className="PhoneBookEntryAdd card card-body bg-light">
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
};

// Using redux the phonebookReducer properties are now props
const mapStateToProps = state => ({
  phoneBookReducerSearchTerm: state.phoneBookReducer.searchTerm,
});

const mapDispatchToProps = {
  actionPhoneBookSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookSearch);
