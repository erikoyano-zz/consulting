import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
// import Services from "./components/pages/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/services" component={Services} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
