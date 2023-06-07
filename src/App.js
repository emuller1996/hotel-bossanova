import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from './components/_NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/_Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <Router>
        <div>

          <NavBar />


          <Switch>
            <Route path="/contacto">
              <div className='container m-2 mb-5'>

                <p>contacto</p>
              </div>
            </Route>
            <Route path="/habitaciones">
              <p>habitaciones</p>
            </Route>
            <Route path="/sobre-nosotros">
              <p>sobre nosotros</p>
            </Route>
            <Route path="/servicios">
              <p>SERVICIOS</p>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>




    </div>
  );
}

export default App;
