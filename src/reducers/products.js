const products = require('../data/items.json');

export default function playlist(state = products, action) {
    console.log('action', action);
    if (action.type === 'ADD_PRODUCT') {
    return [
      ...state, 
      action.payload
      ];
    }
        return state;
    }
