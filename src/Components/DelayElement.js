import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-widgets/dist/css/react-widgets.css';

class DelayElement extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
        }
    }

    onChange = date => {
        this.setState({ date });
        console.log()
    }


    render() {
        if (!this.props.delay) {
            return <div className='DelayElement'/>
        }
        else {
            return <div className='DelayElement'>
                Set date & time<br/>
                <DateTimePicker
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        }
    }
}

export default DelayElement;