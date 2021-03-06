import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProgressBar from 'react-scroll-progress-bar';
import { Helmet } from 'react-helmet';
import NavBar from './components/NavBar';
import Corousel from './components/Corousel';
import BlogsContainer from './components/BlogsContainer';
import VscodeSetup from './components/Pages/VscodeSetup';
import BSPWM from './components/Pages/BSPWM';
import Footer from './components/Footer';
import Recommended from './components/Recommended';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Helmet>
              <title>genzyy_blogs</title>
            </Helmet>
            <NavBar />
            <Corousel />
            <BlogsContainer />
            <Footer />
          </Route>

          <Route exact path='/vscode_setup'>
            <ProgressBar />
            <VscodeSetup />
            <Footer />
          </Route>
          <Route exact path='/bspwm_config'>
            <ProgressBar />
            <BSPWM />
            <Footer />
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
// <VscodeSetup />
// As of now the recommended articles section from the blogpage
// has been removed as it was creating problems with alignment, scrolling in mobile phones
// and progress bar.
// It will be fixed in the near future.
