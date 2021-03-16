import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';

function App() {
  return (
    <>
    <h1>Day work here done!!</h1>
    <p>day 2 work in progress</p>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
      </Container>
   </>
  );
}

export default App;
