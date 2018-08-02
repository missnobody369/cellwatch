import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Home from './Home';
import Login from './Login';
import Technician from './Technician';
import AdminSchedule from './AdminSchedule';
console.log(localStorage.token)
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
	    localStorage.token ? (
	        <Component {...props} />
	    ) : (
	        <Redirect
	            to={{
	            	pathname: '/login',
	            	state: { from: props.location }
	            }}
	        />
	    )}
  />
);

ReactDOM.render((
	<Router history={createHistory}>
		<App>
			<Route exact={true} path="/" component={Home} />
			<PrivateRoute exact={true} path="/admin" component={Admin} />
			<PrivateRoute exact={true} path="/technician" component={Technician} />
			<Route exact={true} path="/login" component={Login} />
			<Route exact={true} path="/adminschedule" component={AdminSchedule} />
		</App>
	</Router>
),


document.getElementById('root'));
registerServiceWorker();
