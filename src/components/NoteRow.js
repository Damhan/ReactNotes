import React from 'react';

class NoteRow extends React.Component {
    constructor(props) {
        super(props)
        this.strikeThrough = this.strikeThrough.bind(this)
    }

    strikeThrough() {
        var notes = this.props.notes.slice();
        var isClicked = notes[this.props.ind].isClicked;
        notes[this.props.ind].isClicked = !isClicked;
        this.props.update(notes);
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

}

export default NoteRow;