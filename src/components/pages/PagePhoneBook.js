import React, { Component } from 'react';
import Navigation from '../Navigation';
import PhoneBookEntryAdd from '../phonebook/PhoneBookEntryAdd';
import PhoneBookEntryDataDisplay from '../phonebook/PhoneBookEntryDataDisply';

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
        <PhoneBookEntryDataDisplay />
      </div>
    );
  }
}

export default PagePhoneBook;
