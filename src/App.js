import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BrandList from "./components/brandList";
import ItemList from './components/itemList'
import BrandDetail from "./components/brandDetail";
import MainMenu from "./pages/MainMenu";
import NotFound from "./pages/NotFound";
import ItemDetail from "./components/itemDetail";


class Menu extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path="/" component={MainMenu} />
                  <Route path="/brands/:brand" component={BrandDetail} />
                  <Route exact path="/brands" component={BrandList} />       
                  <Route exact path="/products" component={ItemList}/>
                  <Route path="/products/:product" component={ItemDetail}/>
                  <Route component={NotFound}/>
                  
                </Switch>
            </Router>
        

        );
    }
}           
                     
export default Menu;