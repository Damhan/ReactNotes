import React from 'react';
import { connect } from 'react-redux';
import {addNote} from './../actions/noteActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class InsertBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.addNote({id: uuid(), mesg:this.state.value, isClicked:false});
        //TODO - figure out how to clear this input
        //this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input maxlength="120"class="noteInsertBar" type="text" name="" onChange={this.handleChange}/>
                    <input class="insertBut" type="submit" value="Add Note"/>
                </form>
            </div>

        )
    }
}

//
InsertBar.propTypes = {
    getNotes: PropTypes.func.isRequired,
    noteR: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    //We called our reducer noteR back in our noteReducer
    noteR: state.noteR
});

export default connect(mapStateToProps, {addNote})(InsertBar);
