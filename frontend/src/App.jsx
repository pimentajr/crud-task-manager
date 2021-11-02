import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
