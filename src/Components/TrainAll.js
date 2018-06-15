import React, {Component} from 'react';
import $ from "jquery";

class TrainAll extends Component {
    constructor() {
        super();

        this.state = {
            training: false,
        }
    }

    testAgent = {
        name: 'whoopsy',
        token: '4fc076af2bdd49f99d89ef8a60f807bc'
    }

    trainToActual() {
        this.setState({training: true});
        $.ajax({
            type: "POST",
            url: 'http://localhost:8081/train/all/actual',
            data: JSON.stringify(this.testAgent),
            success: function (data) {
            },
            contentType: "application/json; charset=utf-8",
            dataType:
                'json'
        });
    }

    trainToExpected() {
        this.setState({training: true});
        $.ajax({
            type: "POST",
            url: 'http://localhost:8081/train/all/expected',
            data: JSON.stringify(this.testAgent),
            success: function (data) {
            },
            contentType: "application/json; charset=utf-8",
            dataType:
                'json'
        });
    }

    render() {
        return <div className='TrainAll'>
            <span className='TestResultsText'>Test Results</span>
            <span><button className='Train'
                          onClick={this.trainToActual.bind(this)}>Train All Actual</button></span>
            <span><button className='Train'
                          onClick={this.trainToExpected.bind(this)}>Train All Expected</button></span>
        </div>
    }
}

export default TrainAll;