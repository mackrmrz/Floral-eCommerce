import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from "react-redux";


class ShowProducts extends Component {

  componentDidMount() {
    this.props.fetchingData();
  }
  render() {
    return (
      <div className="product-display">
          connect to redux state
        </div>
      )
    }
  }


function mapStateToProps(state) {
  const { products } = state.products;
  return {
    products
  }
}


ShowProducts = connect(mapStateToProps, actions)(ShowProducts);
export default ShowProducts;