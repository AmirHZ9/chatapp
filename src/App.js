import { Switch , Route } from 'react-router';
import './App.css';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
