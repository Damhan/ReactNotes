import React from 'react';

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
        const notes = this.props.notes.slice();
        notes.push({mesg:this.state.value, isClicked:false});
        this.props.update(notes);
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

export default InsertBar;
