import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';

ReactDOM.render((
	<App>
		<Route exact={true} path="/" component={Home} />
		<Route exact={true} path="/admin" component={Admin} />
	</App>
), 


document.getElementById('root'));
registerServiceWorker();
