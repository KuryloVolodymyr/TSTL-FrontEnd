import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import './Styles/StartTesting.css';
import './Styles/DelayElement.css';
import './Styles/TestingProcess.css';
import './Styles/UnmatchedUserSays.css';
import './Styles/TrainAll.css';
import Testing from "./Components/Testing";


class App extends Component {
    constructor() {
        super();
        this.state = {
            tstl: []
        }
    }

    // componentWillMount(){
    // this.handleClick();

    // }

    handleClick() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            dataType: 'json',
            cache: false,
            success: function (data) {
                let updatedState = this.state;
                this.setState(updatedState.tstl = data, function () {
                    console.log(this.state);
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err)
            }
        })
    }

    render() {
        return (
            <div className="App">
                <h1 className='TitleText'>Testing process</h1>
                <Testing intents={169} userSays={18932}/>
            </div>
        );
    }
}

export default App;
