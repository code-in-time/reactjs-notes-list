import React, { Component } from 'react';
import Navigation from '../Navigation';
import PhoneBookEntryAdd from '../phonebook/PhoneBookEntryAdd';

/**
 * This the the home Page
 * @class Home
 * @extends {Component}
 */
class PagePhoneBook extends Component {
  render() {
    return (
      <div className="PagePhoneBook">
        <Navigation />
        <PhoneBookEntryAdd />
      </div>
    );
  }
}

export default PagePhoneBook;
