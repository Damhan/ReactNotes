import React from 'react';
import NoteRow from './NoteRow';
import { connect } from 'react-redux';
import {getNotes, delNote} from './../actions/noteActions';
import PropTypes from 'prop-types';


class Notes extends React.Component {
    

    componentDidMount() {
        this.props.getNotes();
    }

    delClick = (id) => {
        this.props.delNote(id)
    }

    renderNote() {
        const {notes} = this.props.noteR;
        return (
            <div>
                <ul class="list-group ">
                    {notes.map((item, index) => (
                        
                        <div class="container">
                            <li class="list-group-item" style={{display:'inline'}}>
                                <NoteRow key={index} value={item} notes={notes} update={this.props.update} ind={index} />
                                <button style={{float:'right'}} className="deletebut" onClick={this.delClick.bind(this,item.id)}>Del</button>
                            </li>
                            <br/>
                            <br/>
                        </div>
                        
                    ))}
                </ul>
            </div>

        )
    }

    render() {
        return (
            <div class="container">
                <h2>Notes:</h2>
                <div class="FullNote">
                    {this.renderNote()}
                </div>
            </div>
        )
    }
}

//
Notes.propTypes = {
    getNotes: PropTypes.func.isRequired,
    noteR: PropTypes.object.isRequired
}


//@params1
//our state
const mapStateToProps = (state) => ({
    //We called our reducer noteR back in our noteReducer
    noteR: state.noteR
});

//connect
//@params1
//-Maps our state from the redux store to the components properties so we can
// access it.
//@params2
//An object containing each of the desired actions.
export default connect(mapStateToProps, {getNotes, delNote})(Notes);