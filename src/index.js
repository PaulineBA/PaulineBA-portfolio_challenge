import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import CV from "./cv";
import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./header";
import Footer from "./footer";


const App = () => {
  return (
    <>
      <Header />
      <Switch>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/cv" component={CV}></Route>
      <Route exact path="/" component={Hello}></Route> 
      
        
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
document.getElementById("app")
);