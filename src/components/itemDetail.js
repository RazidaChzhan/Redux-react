import React from "react";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import products from '../data/items';


function ItemDetail({ match })  {
  const product = products.find(product => product.slug === match.params.product);
  console.log (product);
  return (
      <div>
        <Helmet>
        <title>{product.slug}</title>
        </Helmet>
        {product.photos.map( photo => (
          <img src={photo.small} alt={products.slug}/>
        ))}
          
        <NavLink to="/products"> 
          Back
        </NavLink>
      </div>
        );
        }

export default ItemDetail;