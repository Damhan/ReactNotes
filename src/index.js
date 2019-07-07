import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteRow extends React.Component {
    constructor(props) {
        super(props)
        this.strikeThrough = this.strikeThrough.bind(this)
    }

    render() {
        return (
            <div class="singleNoteDiv" style={{display:'inline'}} onClick = {this.strikeThrough}>
                <p 
                className="noteRow" 
                style= {{display: 'inline' , textDecorationLine : this.props.value.isClicked ? 'line-through' : 'none'}}
                
                >
                    {this.props.value.mesg}
                </p>
            </div>
            
        );
    }

    strikeThrough() {
        var notes = this.props.notes.slice();
        var isClicked = notes[this.props.ind].isClicked;
        notes[this.props.ind].isClicked = !isClicked;
        this.props.update(notes);
    }
}

class DeleteNoteBut extends React.Component {
    constructor(props) {
        super(props)
        this.delRow = this.delRow.bind(this)
    }
    render() {
        return (
            <button className="deletebut" onClick={this.delRow}>
                Del
            </button>
        );
    }

    delRow() {
        var notes = this.props.notes.slice();
        notes.splice(this.props.ind,1);
        this.props.update(notes);
    }
}

class Notes extends React.Component {
    
    renderNote() {
        return (
            <div>
                {this.props.notes.map((item, index) => (
                    <div class="noteAndDel">

                        <NoteRow key={index} value={item} notes={this.props.notes} update={this.props.update} ind={index} />
                        <DeleteNoteBut update={this.props.update} notes={this.props.notes} ind={index}/>
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
                    {this.renderNote()}
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
                    update = {this.update}
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