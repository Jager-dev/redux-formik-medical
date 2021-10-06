import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Projects from "./views/Projects";
import Works from "./views/Works";
import Calendar from "./views/Calendar";
import Possibilities from "./views/Possibilities";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/'><Redirect to="/projects"/></Route>
        <Route exact path='/projects'><Projects /></Route>
        <Route exact path='/works'><Works /></Route>
        <Route exact path='/calendar'><Calendar /></Route>
        <Route exact path='/possibilities'><Possibilities /></Route>
      </Layout>
    </Router>
  );
}

export default App;
