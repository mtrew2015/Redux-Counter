import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    return { count: state.count + 1}
    case DECREMENT:
    return { count: state.count - 1}
    case INCREMENTIFODD: 
    return{count: state.count + 1}
    case INCREMENTASYNC:
    return{count: state.count + 1}
    default:
      return state;
  }
};
