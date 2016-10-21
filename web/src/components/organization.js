import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

export default class Organization extends React.Component {
    render(){
        return (
            <div>
                <div className="row large-6 large-offset-5 medium-6 medium-offset-5 small-6 small-offset-5 columns">
                    <h1>This is organization</h1>
                    <ul>
                        <li><Link to="/organization/100/projects"> Organization 100</Link></li>
                        <li><Link to="/organization/200/projects"> Organization 200</Link></li>
                        <li><Link to="/organization/300/projects"> Organization 300</Link></li>
                    </ul>
                    {this.props.children}
                </div>              
            </div>            
        );
    }
}
