import React from "react";
import { connect} from 'react-redux';
import { NavLink } from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: require('./data/brands.json')
        };

    }
    addTrack() {
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
        console.log (this.props.testStore);
        const items = this.props.testStore;
        return (
            <div>
                <input type="text" ref={(input) => { this.trackInput = input; }} />
                <button onClick={this.addTrack.bind(this)}>Add brand</button>
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
        </div>
        );
    }
}

export default connect (
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({ type: 'ADD_TRACK', payload: trackName })
          }
    })
)(App);