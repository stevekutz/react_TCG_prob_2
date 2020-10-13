import React, {Component} from 'react';
import ValidationComp from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'


import './App.css';

class App extends Component {
    state = {
        userText: ''
    }

    handleInput = ev => {
        // better way
        this.setState({[ev.target.name]: ev.target.value});

        // another way
        // this.setState({userText: ev.target.value})

    }

    deleteChar = (index) => {
        const userText_copy = this.state.userText.split('');
        userText_copy.splice(index, 1);

        const updatedUserText = userText_copy.join('');
        this.setState({userText: updatedUserText});
    
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

                {this.state.userText.split('').map( (char, index)  => {
                    return <CharComponent
                        key = {index}
                        current_char = {char}
                        index_val = {index}
                        deleteCharHandler = {() => this.deleteChar(index)}

                    />
                
                    })}


            </div>
        );
    
    
    
    }

}

export default App;
