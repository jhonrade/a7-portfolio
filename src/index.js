
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="page-1" component={ProjectsPage}/>
            <Route path="page-2" component={ContactPage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
