import './App.css';
import NavBar from './components/NavBar';
import Corousel from './components/Corousel';
import BlogsContainer from './components/BlogsContainer';
import VscodeSetup from './components/Pages/VscodeSetup';
import BSPWM from './components/Pages/BSPWM';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <Corousel />
            <BlogsContainer />
          </Route>

          <Route exact path='/vscode_setup'>
            <VscodeSetup />
          </Route>
          <Route exact path='/bspwm_config'>
            <BSPWM />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Details
// The Router needs to be used to wrap the main div.
// All the ROute components need to be wrapped up in Switch Component or statement.
// Need to use exact to differentiate all other routes.
// And then pass the required component thats to be rendered.
