import React, {Component} from 'react';
import ValidationComp from './ValidationComponent/ValidationComponent'



import './App.css';

class App extends Component {
    state = {
        userText: ''
    }

    handleInput = ev => {
        // better way
        this.setState({[ev.target.name]: ev.target.value})

        // another way
        // this.setState({userText: ev.target.value})

    }

    render() {
        return (
            <div className="App">
                <input
                    className = "input_main"
                    name = 'userText' 
                    type = "text"  
                    onChange = {this.handleInput} 
                    value = {this.state.userText}
                />

                <p> {this.state.userText}</p>
                <ValidationComp  textLength = {this.state.userText.length}   />

            </div>
        );
    
    
    
    }

}

export default App;
