import React from "react";
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";
import { connect} from 'react-redux';
import BackButtonMain from '../components/buttonBackMain';

class ItemList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: require("../data/items.json")
      };
    }

    addProduct() {
      console.log('addTrack', this.trackInput.value);
      let newItem = {
          "id":Math.floor(Math.random() * 1000000) + 1,
          "title":this.trackInput.value,
          "is_top":0,
          "is_privileged":0,
          "visible":1,
          "slug": this.trackInput.value,
          "sort":0,
          "is_visible_in_catalog":1,
          "is_enough_items_to_show":1,
          "show_always":0,
          "brand_logo_url":null
      };
      console.log('newItem', newItem);
      // this.props.onAddTrack(this.trackInput.value);
      this.props.onAddTrack(newItem);
      this.trackInput.value = '';
  }

      render() {
      const { products } = this.state;
       return (
        <div>
          <Helmet>
            <title>ItemList</title>
          </Helmet>
          <input type="text" ref={(input) => { this.trackInput = input; }} />
          <button onClick={this.addProduct.bind(this)}>Add product</button>
          <ul>   
            {products.map(product => (
            <li key={ product.slug }>
            <NavLink to={`/products/${product.slug}`}>
            { product.colorConcrete.image_url == null ? (
            <img src={product.photos[0].small} alt={product.slug}/>
            ) : ( product.colorConcrete.image_url )}
          </NavLink>
          </li>
          ))}
          </ul>
          <div>
          <BackButtonMain/>
          </div>
          
      </div>
      );
    }
  }
  
  export default connect (
    state => ({
        testStore: state.products
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({ type: 'ADD_PRODUCT', payload: trackName })
          }
    })
)(ItemList);