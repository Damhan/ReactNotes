import React from 'react';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Notes from './components/Notes';
import InsertBar from './components/InsertBar';

import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
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
                <h1 class="jumbotron text-center">React Notes</h1>
                <div class="container text-center">
                    <InsertBar 
                    notes={this.state.notes}
                    update = {this.update}
                    />   
                </div>
                <div class="container">
                    <Notes 
                    notes={this.state.notes}
                    update = {this.update}
                    />
                </div>
            </div>
        )
    }
}

export default App;