import React, { Component } from 'react';
import Navigation from '../../shared/Navigation';
import DrawerButton from './DrawerButton';


/**
 * This the the home Page
 * @class Home
 * @extends {Component}
 */
class PageMaterialui extends Component {
  render() {
    return (
      <div className="PageHome">
        <Navigation />
        <DrawerButton />
      </div>
    );
  }
}

export default PageMaterialui;
