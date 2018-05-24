import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import Login from './Login';


ReactDOM.render((
	<Router history={createHistory}>
		<App>
			<Route exact={true} path="/" component={Home} />
			<Route exact={true} path="/admin" component={Admin} />
			<Route exact={true} path="/login" component={Login} />
		</App>
	</Router>
), 


document.getElementById('root'));
registerServiceWorker();
