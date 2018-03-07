import React, { Component } from 'react';
import Navigation from '../../shared/Navigation';
import PhoneBookEntryAdd from '../phonebook/PhoneBookEntryAdd';
import PhoneBookDataDisplay from '../phonebook/PhoneBookDataDisplay';
import PhoneBookSearch from '../phonebook/PhoneBookSearch';

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
        <PhoneBookSearch />
        <PhoneBookDataDisplay />
      </div>
    );
  }
}

export default PagePhoneBook;
