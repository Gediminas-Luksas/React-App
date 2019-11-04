import _ from 'lodash';
import {
    FETCH_SREAM,
    FETCH_SREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_SREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);

        default: 
            return state;
    }
};