import {GET_NOTES,ADD_NOTE,DEL_NOTE} from './types';

//Export an arrow function "getNotes",
//Send the action type with it.
export const getNotes = () => {
    return {
        type: GET_NOTES
    }
}

//Export delNote
//Send action type with it
//Send the id of the note through our payload to reducer
export const delNote = (id) => {
    return {
        type: DEL_NOTE,
        payload:id
    }
}

//Export delNote
//Send action type with it
//Send the note through our payload to reducer
export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload:note
    }
}
