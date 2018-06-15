import React, {Component} from 'react';
import {Line} from 'rc-progress';
import UnmatchedUserSays from './UnmatchedUserSays';
import TrainAll from './TrainAll';


class TestingProcess extends Component {
    constructor() {
        super();
        this.state = {}
    }


    clickBack() {
        console.log('back')
    }


    render() {
        let display = this.props.results;
        let testedUserSays = display.userSaysTested;
        let failedUserSays = display.unmatchedUserSays.length;
        let passedUserSays = testedUserSays - failedUserSays;
        let percentsTested = Math.floor(testedUserSays * 100 / this.props.userSays);
        let percentsPassed = Math.floor(passedUserSays * 100 / this.props.userSays);
        let percentsFailed = Math.floor(failedUserSays * 100 / this.props.userSays);

        return <div className='TestingProcess'>
            <div className="ResultsBorder">
                <button className='back' onClick={()=>{this.clickBack()}}>Back</button>
                <div className='InnerResults'>
                    <div className='agentNumbers'>
                        <div className='detailNumberIntents'>
                            <h1 className='BigText'>{this.props.intents}</h1> <h2 className='SmallText'>Intents
                            number</h2>
                        </div>
                        <div className='detailNumberUserSays'>
                            <h1 className='BigText'>{this.props.userSays}</h1>  <h2 className='SmallText'>user says
                            number</h2>
                        </div>
                    </div>

                    <div className='ProgressBars'>
                        <div className='progressBar'>
                            <div className='Results'>Tested <text className='GreyText'>({testedUserSays})</text></div>
                            <div className='Percentage'>{percentsTested}%</div>
                            <Line percent={(percentsTested).toString()}
                                  strokeWidth="2"
                                  trailWidth="2"
                                  strokeColor="#5A98F7"
                                  trailColor="#F7FAFE"/>
                        </div>
                        <div className='successfulBar'>
                            <div className='Results'>Passed <text className='GreyText'>({passedUserSays})</text></div>
                            <div className='Percentage'>{percentsPassed}%</div>
                            <Line percent={(percentsPassed).toString()}
                                  strokeWidth="2"
                                  trailWidth="2"
                                  strokeColor="#5A98F7"
                                  trailColor="#F7FAFE"/>
                        </div>
                        <div className='failedBar'>
                            <div className='Results'>Failed <text className='GreyText'>({failedUserSays})</text></div>
                            <div className='Percentage'>{percentsFailed}%</div>
                            <Line percent={(percentsFailed).toString()}
                                  strokeWidth="2"
                                  trailWidth="2"
                                  strokeColor="#5A98F7"
                                  trailColor="#F7FAFE"/>
                        </div>
                    </div>
                </div>
            </div>
            <TrainAll/>
            <UnmatchedUserSays unmatchedUserSays={display.unmatchedUserSays}/>
        </div>
    }
}

export default TestingProcess;