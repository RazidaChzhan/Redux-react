import React from "react";
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";
import BackButtonMain from '../components/buttonBackMain';

class ItemList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: require("../data/items.json")
      };
    }
      render() {
      const { products } = this.state;
       return (
        <div>
          <Helmet>
            <title>ItemList</title>
          </Helmet>
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
  
  export default ItemList;