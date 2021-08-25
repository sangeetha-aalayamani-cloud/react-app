import logo from './logo.svg';
import './App.css';
import { Userform } from './components/userform';

function App() {
  return (
    <div className="App">
      <header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           React - Welcome to e-Learning
        </a>
      </header> 
      <UserForm></UserForm>
    </div>
  );
}

export default App;
