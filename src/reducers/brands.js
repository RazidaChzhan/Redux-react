const items = require('../data/brands.json')

export default function playlist(state = items, action) {
    console.log('action', action);
    if (action.type === 'ADD_TRACK') {
    return [
      ...state, 
      action.payload
      ];
    }
        return state;
    }
