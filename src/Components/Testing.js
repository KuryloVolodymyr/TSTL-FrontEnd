import React, {Component} from 'react';
// import DelayElement from './DelayElement';
import StartTesting from './StartTesting';
import TestingProcess from './TestingProcess'
import $ from "jquery";
import SockJsClient from 'react-stomp';

class Testing extends Component {
    constructor() {
        super();
        this.state = {
            testingStarted: false,
            results: {
                agentToken: "4fc076af2bdd49f99d89ef8a60f807bc",
                emptyIntents: 0,
                projectName: "whoopsy",
                unmatchedUserSays: [],
                userSaysTested: 0
            }
    }
    }

    testAgent = {
        name: 'whoopsy',
        token: '4fc076af2bdd49f99d89ef8a60f807bc'
    }

    sendStartTestingRequest() {
        $.ajax({
            type: "POST",
            url: 'http://localhost:8081/test/agent',
            data: JSON.stringify(this.testAgent),
            success: function (data) {},
            contentType: "application/json; charset=utf-8",
            dataType:
                'json'
        });
    }

    startTesting() {
        if (!this.state.testingStarted) {
            this.sendStartTestingRequest();
        }
        let newState = this.state;
        newState.testingStarted = true;
        this.setState(newState);
    }

    setTestingResults(msg) {
        let newState = this.state;
        newState.results = msg;
        this.setState(newState);
    }

    showTesting(msg) {
        if (!this.state.testingStarted) {
            return <StartTesting start={this.startTesting.bind(this)}/>
        }
        else {
            return <TestingProcess token={this.testAgent.token} results={this.state.results} intents={this.props.intents}
            userSays={this.props.userSays}/>
        }
    }

    render() {
        return <div className='Testing'>
            <SockJsClient url='http://localhost:8081/testingSockets' topics={['/topic/results/' + this.testAgent.token]}
                          onMessage={(msg) => {
                              this.setTestingResults(msg)
                          }}
                          onConnect={console.log('connected')}
                          ref={(client) => {
                              this.clientRef = client
                          }}/>
            {this.showTesting()}
        </div>
    }
}

export default Testing;