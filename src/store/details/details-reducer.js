import {
  CLEAR_DETAILS,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
} from './details-action';

const initialState = {
  currentCountry: null,
  error: null,
  status: 'idle',
  neighbors: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, status: 'loading' };
    case SET_ERROR:
      return { ...state, status: 'error', error: payload };
    case SET_COUNTRY:
      return { ...state, status: 'idle', currentCountry: payload };
    case CLEAR_DETAILS:
      return initialState;
    case SET_NEIGHBORS:
      return { ...state, neighbors: payload };
    default:
      return state;
  }
};
