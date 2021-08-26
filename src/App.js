import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/userForm';
import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users">
              <UserForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
