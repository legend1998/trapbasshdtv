import "./App.css";
import Dashboard from "./Dashboard";
import "./Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Catalog from "./Catalog";
import Withdrawel from "./Withdrawel";
import Tickets from "./Tickets";
import Reports from "./Reports";
import ReleaseCreate from "./ReleaseCreate";

function App() {
  let login = false;

  return (
    <div className="App">
      {login ? (
        <Login />
      ) : (
        <div className="main-app">
          <Router>
            <Header />
            <Switch>
              <Route path="/catalog">
                <Catalog />
              </Route>
              <Route path="/withdrawel">
                <Withdrawel />
              </Route>
              <Route path="/Tickets">
                <Tickets />
              </Route>
              <Route path="/Reports">
                <Reports />
              </Route>
              <Route path="/createrelease">
                <ReleaseCreate />
              </Route>

              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
