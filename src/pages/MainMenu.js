import React from "react";
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";

class MainMenu extends React.Component {
    render() {
        return (
                <div>
                    <Helmet>
                        <title>Main Menu</title>
                    </Helmet>
                    <ul>
                  <li>
                    <NavLink to="/brands">View BrandList</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">View ItemsList</NavLink>
                  </li>
                </ul>  
                </div>
        );
    }
}
                     
export default MainMenu;