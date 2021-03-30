import "./App.css";
import "./Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Panel from "./Panel";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          {user ? (
            <Route path="/panel">
              <Panel />
            </Route>
          ) : (
            <Route path="/login">
              <Login />
            </Route>
          )}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
