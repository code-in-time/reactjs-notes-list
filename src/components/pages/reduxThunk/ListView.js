import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { itemsIsLoading, itemsFetchData } from '../../../actions/itemsActions';

class ItemList extends Component {
  componentDidMount() {
    // this.props.itemsIsLoading(true);
    console.log('before-------------');
    this.props.itemsFetchData();
    console.log('aftrer--------------');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
    );
  }
}

ItemList.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  itemsFetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  hasErrored: state.itemsReducer.hasErrored,
  isLoading: state.itemsReducer.isLoading,
  items: state.itemsReducer.items,
});

const mapDispatchToProps = {
  itemsIsLoading,
  itemsFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
