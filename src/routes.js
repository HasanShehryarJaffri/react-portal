import React from 'react';
import  {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/Authentication/Login'; 
import HomePage from './components/HomePage/HomePage';

export default  (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="login" component={Login}/>
        <Route path="homepage" component={HomePage}/>
    </Route>
);