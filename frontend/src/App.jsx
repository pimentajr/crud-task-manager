import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Manager from './Pages/Manager/Manager';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/manager" component={ Manager } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
