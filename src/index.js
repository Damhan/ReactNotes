import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteRow extends React.Component {
    render() {
        return (
            <b className="noteRow">
                {this.props.value}
            </b>
        );
    }
}

class DeleteNoteBut extends React.Component {
    render() {
        return (
            <button className="deletebut">
                Del
            </button>
        );
    }
}

class Notes extends React.Component {
    
    renderNote(i) {
        return (
            <div>
                {this.props.notes.map((item, index) => (
                    <div class="noteAndDel">

                        <NoteRow key={index} value={item} />
                        <DeleteNoteBut />
                        <br/>
                    </div>
                ))}
            </div>

        )
    }

    render() {
        return (
            <div>
                <h2>Notes:</h2>
                <div class="FullNote">
                    {this.renderNote(1)}
                </div>
            </div>
        )
    }
}

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
        notes.push(this.state.value);
        this.props.update(notes);
        //TODO - figure out how to clear this input
        //this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input class="noteInsertBar" type="text" name="" onChange={this.handleChange}/>
                    <input class="insertBut" type="submit" value="Add Note"/>
                </form>
            </div>

        )
    }
}

class NoteApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: Array(),
        };
        this.update = this.update.bind(this);
    }

    update(notes) {
        this.setState({
            notes: notes
        });
    }

    render() {
        return (
            <div>
                <h1>React Notes</h1>
                <div class="InsertBarDiv">
                    <InsertBar 
                    notes={this.state.notes}
                    update = {this.update}
                    />   
                </div>
                <div class="NotesDiv">
                    <Notes 
                    notes={this.state.notes}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <NoteApplication />,
    document.getElementById('root')
  );