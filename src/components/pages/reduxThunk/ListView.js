import React, { Component } from 'react';
// import axios from 'axios';
import { apiMock } from '../../../API/index';

class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      hasErrored: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    apiMock()
      .then((res) => {
        this.setState({ isLoading: true });
        return res.data;
      })
      .then((data) => {
        console.log('dddddd', data);
        this.setState({ items: [...data] });
      })
      .catch(() => {
        this.setState({ hasErrored: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
            test
        {this.state.items.map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
    );
  }
}

export default ItemList;
