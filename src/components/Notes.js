import React from 'react';
import NoteRow from './NoteRow';
import DeleteNoteBut from './DeleteNoteButton';

class Notes extends React.Component {
    
    renderNote() {
        return (
            <div>
                <ul class="list-group ">
                    {this.props.notes.map((item, index) => (
                        
                        <div class="container">
                            <li class="list-group-item" style={{display:'inline'}}>
                                <NoteRow key={index} value={item} notes={this.props.notes} update={this.props.update} ind={index} />
                                <DeleteNoteBut class="pull-right" update={this.props.update} notes={this.props.notes} ind={index}/>
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

export default Notes;