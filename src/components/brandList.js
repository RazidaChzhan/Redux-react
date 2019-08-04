import React from "react";
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";
import BackButtonMain from '../components/buttonBackMain';


class BrandList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: require("../data/brands")
    };
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <Helmet>
          <title>BrandList</title>
        </Helmet>
        <ul>
           {items.map(item => (
           <li key={item.slug}>
            <NavLink to={`/brands/${item.slug}`}>
              {item.brand_logo_url !== null ? (
                <img src={item.brand_logo_url} alt=''/>
              ) : (
              item.title
              )}
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

export default BrandList;
