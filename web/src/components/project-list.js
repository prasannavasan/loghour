import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

export default class ProjectList extends React.Component {
    render(){
        return (
            <div>
                <div className="row large-6 large-offset-5 medium-6 medium-offset-5 small-6 small-offset-5 columns">
                    <h2>orgId - {this.props.params.orgId}</h2>
                    <p><Link to="/projects/001"> Project 01 </Link></p>
                    <p><Link to="/projects/002"> Project 02 </Link></p>
                    <p><Link to="/projects/003"> Project 03 </Link></p>
                </div>
            </div>            
        );
    }
}
