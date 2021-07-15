import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function ContactUs() {
  return <div>Contact us</div>;
}

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ width: 280, backgroundColor: "red", height: "100vh" }}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/contactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
