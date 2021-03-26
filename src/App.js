import "./App.css";
import "./Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import Signup from "./Signup";
import { auth, firedb } from "./firebaseConfig";
import Home from "./Home";
import Panel from "./Panel";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user, "this is user");

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      console.log(u, "this is u");
      if (u) {
        firedb
          .collection("user")
          .doc(u.email)
          .get()
          .then((doc) => {
            dispatch({
              type: "SET_USER",
              user: doc.data(),
            });
          })
          .catch((e) => {
            alert(e);
          });
        //nothing
      } else {
        dispatch({
          type: "DELETE_USER",
        });
      }
    });
  }, [dispatch]);

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
