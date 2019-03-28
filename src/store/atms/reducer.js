import { INIT_ATMS } from './constants';

const atmsReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_ATMS:
      return action.atms;
    default:
      return { ...state, results: [] };
  }
}

export default atmsReducer;