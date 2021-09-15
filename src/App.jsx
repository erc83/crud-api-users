import {BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import UserDelete from './containers/user-delete/UserDelete';
import UserList from './containers/user-list/UserList';

function App() {
 
  return (
    <div className="App">
        <Router>
          <NavLink to="/">
              Home             
          </NavLink>
          -
          <NavLink to="/create">
              create            
          </NavLink>
          <Switch>
            <Route path="/" exact>
              <UserList />       
            </Route>
            
            <Route path="/users/delete/:id">
              <UserDelete />       
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
