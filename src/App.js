import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/userForm';

function App() {
  return (
    <div className="App">
      <header>
		<a href="#">
          Welcome to React e-Learning
        </a>
      </header>
	   <UserForm></UserForm>
    </div>
  );
}
export default App;
