import React, {Component} from 'react';
// import NlpProjectSubmit from './Components/NlpProjectSubmit';
import TestingElement from './Components/Testing';
import $ from 'jquery';
import './App.css';
import './Styles/StartTesting.css';

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
                this.setState({tstl: data}, function () {
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
                <TestingElement/>
            </div>
        );
    }
}

export default App;
