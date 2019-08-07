import uuid from 'uuid';
import {GET_NOTES,ADD_NOTE,DEL_NOTE} from './../actions/types';

//Adding some static data to our reducers state.
const initialState = {
    notes: [
        {id: uuid(), mesg:'To do note number 1', isClicked:false},
        {id: uuid(), mesg:'This is the 2nd sample note', isClicked:false},
        {id: uuid(), mesg:'Here is another and final note example.', isClicked:false},
    ]
}

export default function(state=initialState, action) {
    switch(action.type) {
        //CASE FOR WHEN ACTION is GET_NOTES
        //We are using the spread operator to just return what is in our state.
        case GET_NOTES:
            return {
                ...state
            }
        //CASE FOR WHEN ACTION IS DEL_NOTES
        //
        case DEL_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        //CASE FOR WHEN ACTION IS ADD_NOTE
        //Return our state with spread operator
        //Set notes to notes with new note pushed.
        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        default:
            return state;
    }
}