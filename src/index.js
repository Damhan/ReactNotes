import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteRow extends React.Component {
    render() {
        return (
            <b className="noteRow">
                SampleNote
            </b>
        );
    }
}

class DeleteNoteBut extends React.Component {
    render() {
        return;
    }
}

class Notes extends React.Component {
    render() {
        return;
    }
}

class InsertBar extends React.Component {
    render() {
        return; 
    }
}

class NoteApplication extends React.Component {
    render() {
        return;
    }
}

ReactDOM.render(
    <NoteRow />,
    document.getElementById('root')
  );