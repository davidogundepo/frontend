import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserUpdateForm from './components/UserUpdateForm';
import UserInfoDisplay from './components/UserInfoDisplay';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
            <li>
              <Link to="/info">User Info</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/update" component={UserUpdateForm} />
          <Route path="/info" component={UserInfoDisplay} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
