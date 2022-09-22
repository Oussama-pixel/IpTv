import React from "react";
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./app.scss"

function App() {
  return (
    <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
          </Routes>
        </Router>
    </React.StrictMode>
  );
}

export default App;
