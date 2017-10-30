import {
  CLINICALDOCS_TOGGLE_FUNCTION
} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function clinicalDocsReducer(state = initialState, action) {
  //let newState;
  let openedState;

  if (action.id) {
    openedState = state.components.byId[action.id].isOpened;
  }

  switch (action.type) {

    case CLINICALDOCS_TOGGLE_FUNCTION:

      return {
        ...state,
        components: {
          ...state.components,
          byId: {
            ...state.components.byId,
            [action.id]: {
              ...state.components.byId[action.id],
              isOpened: !openedState
            }
          }
        }
      };

    default:
      return state;
  }
}
