import { buyCake } from "../actions/CakeActions";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyCake: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    }

    default:
      return state;
  }
};

export default cakeReducer;
