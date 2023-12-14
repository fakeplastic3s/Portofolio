import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Porto from "./pages/Porto";
import Content from "./component/Home";
import Project from "./component/Project";
import Skill from "./component/Skill";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Porto}>
            <Route path="/" Component={Content} />
            <Route path="/Project" Component={Project} />
            <Route path="/Skill" Component={Skill} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
