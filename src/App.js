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
import { useState } from "react";
import { useEffect } from "react";
import MobileHeader from "./MobileHeader";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider";

function App() {
  const [width, setwidth] = useState(window.innerWidth);
  const [{ user }, dispatch] = useStateValue();
  let login = false;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
    });

    let u = localStorage.getItem("user");
    dispatch({
      type: "SET_USER",
      user: u,
    });
  }, [width, dispatch]);

  return (
    <div className="App">
      {!user ? (
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      ) : (
        <div className="row">
          <Router>
            {width < 720 ? <MobileHeader /> : <Header />}
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
