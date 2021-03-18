import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo';
import Patients from './pages/Patients';
import PatientShow from './pages/PatientShow';
import Physicians from './pages/Physicians';
import PhysicianShow from './pages/PhysicianShow';
import Appointments from './pages/Appointments';

function App() {

  return (
    <>
    <NavBar />
    <h1 style={{color: PRIMARY_COLOR }}>Hospital</h1>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/componentDemo' component={ComponentDemo} />
        <Route exact path='/patients' component={Patients} />
        <Route exact path='/patients/:id' component={PatientShow} />
        <Route exact path='/physicians' component={Physicians} />
        <Route exact path='/physicians/:id' component={PhysicianShow} />
        <Route exact path='/appointments' component={Appointments} />
      </Switch>
      </Container>
   </>
  );
}

export default App;
