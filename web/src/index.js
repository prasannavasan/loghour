import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';
import Organization from 'components/organization';
import ProjectList from 'components/project-list';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="projects" component={ProjectList}/>
            <IndexRoute component={Organization}/> 
        </Route>
    </Router>,
    document.getElementById('app')
);

