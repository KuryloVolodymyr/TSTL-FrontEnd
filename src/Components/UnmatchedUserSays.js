import React, {Component} from 'react';

class UnmatchedUserSays extends Component {
    constructor() {
        super();
        this.state = {
            unmatchedUserSays: []
        }
    }

    showUnmatched(unmatchedUserSays) {
        return unmatchedUserSays.map((userSays) => {
                return <tr className='TableResults' onChange={(msg)=>console.log(msg)}>
                    <td className='UserSaysRow'>{userSays.userSays}</td>
                    <td className='ExpectedIntentRow'><input type="radio" name={userSays.userSays}
                                                             value={userSays.expectedIntentId}/>{userSays.expectedIntentName}
                    </td>
                    <td className='ActualIntentRow'><input type="radio" name={userSays.userSays}
                                                           value={userSays.actualIntentId}/>{userSays.actualIntentName}
                    </td>
                    <td className='ButtonRow'>
                        <button className='train' onClick={() => console.log('train')}>Train</button>
                    </td>
                </tr>
            }
        );
    }

    render() {
        return <div className='UnmatchedUserSays'>
            <table className='TableUnmatched'>
                <tr className='TableHeader'>
                    <td className='UserSaysRow'>User Says</td>
                    <td className='ExpectedIntentRow'>Expected Intent Name</td>
                    <td className='ActualIntentRow'>Actual Intent Name</td>
                    <td className='ButtonRow'></td>
                </tr>
                {this.showUnmatched(this.props.unmatchedUserSays)}
            </table>
        </div>
    }
}

export default UnmatchedUserSays;