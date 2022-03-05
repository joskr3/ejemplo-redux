import { createStore } from 'redux';
import { DECREMENT, INCREMENT, INCREMENT_BY, RESET } from '../actions';

const reducerFn = ( state = { counter: 0 }, action ) => {
    switch ( action.type ) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        case INCREMENT_BY:
            return { counter: state.counter + action.incrementValue };
            case RESET:
            return { counter: 0 };
        default:
            return state;
    }
}

const store = createStore( reducerFn );
export default store;
