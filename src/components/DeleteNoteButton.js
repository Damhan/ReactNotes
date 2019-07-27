import React from 'react';

class DeleteNoteBut extends React.Component {
    constructor(props) {
        super(props)
        this.delRow = this.delRow.bind(this)
    }
    render() {
        return (
            <button style={{float:'right'}} className="deletebut" onClick={this.delRow}>
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

export default DeleteNoteBut;