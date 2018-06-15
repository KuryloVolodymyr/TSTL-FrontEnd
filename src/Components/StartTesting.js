import React, {Component} from 'react';
import DelayElement from './DelayElement';

class StartTesting extends Component {
    constructor() {
        super();
        this.state = {
            delay: false,
        }
    }

    startButtonClick() {
        this.props.start();
    }

    delayButtonClick() {
        let newState = this.state;
        newState.delay = !this.state.delay;
        this.setState(newState);
    }

    render() {
        return <div className='StartTesting'>
            <div className='TestingStart'>
                Start a testing process right now or postpone later<br/>
                <button className='start' onClick={this.startButtonClick.bind(this)}>Start</button>
                <button className='delay' onClick={this.delayButtonClick.bind(this)}>Delay</button>
            </div>
            <DelayElement delay={this.state.delay}/>
        </div>
    }
}

export default StartTesting;