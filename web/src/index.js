import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';
import Home from 'components/home';
import Organization from 'components/organization';
import ProjectList from 'components/project-list';
import ProjectListItem from 'components/project-list-item';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} /> 
            <Route path="organization" component={Organization} />
            <Route path="organization/:orgId/projects" component={ProjectList} />
            <Route path="/projects/:projectId" component={ProjectListItem} />
            
        </Route>
    </Router>,
    document.getElementById('app')
);

