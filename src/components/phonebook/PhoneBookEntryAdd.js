import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionPhoneBookEntryAdd } from '../../actions/phoneBookActions';

class PhoneBookEntryAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeInputName = this.onChangeInputName.bind(this);
    this.onChangeInputPhoneNumber = this.onChangeInputPhoneNumber.bind(this);

    // Set the state
    this.state = {
      // The text from the input
      name: 'dddd',
      phoneNumber: '12345678',
    };
  }
  onChangeInputName(e) {
    // Set the state
    this.setState({
      name: e.target.value,
    });
  }

  onChangeInputPhoneNumber(e) {
    // Set the state
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  render() {
    return (
      <div className="PhoneBookEntryAdd card card-body bg-light">
        <h3>Add new entry the the Phone book</h3>
        <div className="row">
          <div className="col">
            <input value={this.state.name} onChange={this.onChangeInputName} placeholder="name" type="text" style={{ width: '100%' }} />
            <input value={this.state.phoneNumber} onChange={this.onChangeInputPhoneNumber} placeholder="phoneNumber" type="text" style={{ width: '100%' }} />
          </div>
          <div className="col">
            <button
              onClick={() => this.props.actionPhoneBookEntryAdd({ name: this.state.name, phoneNumber: this.state.phoneNumber })}
              className="btn btn-primary"
            >add
            </button>
          </div>
        </div>
      </div>
    );
  }
}


PhoneBookEntryAdd.propTypes = {
  actionPhoneBookEntryAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  actionPhoneBookEntryAdd,
};

export default connect(null, mapDispatchToProps)(PhoneBookEntryAdd);
