import {combineReducers} from 'redux';
import noteReducer from './noteReducer';

/* File is for combining all of our reducers. This is the meeting point for reducers.

   If we wanted user auth we would add authReducer,
   If we wanted items we would add an itemReducer etc.

   - Import the reducer.
   - Add it to the exported combined Reducers.
*/

export default combineReducers({
    noteR: noteReducer 
})

