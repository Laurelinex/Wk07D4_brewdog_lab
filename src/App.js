import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BeerHome from './containers/BeerHome';
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";

function App() {

  return (
    <Router>
    <>
        <NavBar />
        <Switch>
            <Route exact path="/" component={BeerHome}/>
            <Route component={ErrorPage} />
        </Switch>

    </>
  </Router>
  );  
}

export default App;
