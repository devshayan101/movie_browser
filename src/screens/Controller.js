import React from "react";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookShow from "../screens/bookshow/BookShow";
import Confirmation from "../screens/confirmation/Confirmation";

const Controller = () => {
  // const baseUrl = "/api/v1/";

  return (
    <Router>
      <div className="main-container">
        <Routes>
        
        <Route
          exact
          path="/"
          element={ <Home  />}
        />
        
        <Route
          path="/movie/:id"
          element={ <Details />}
        />
        
        <Route
          path="/bookshow/:id"
          element={ <BookShow />}
        />
        
        <Route
          path="/confirm/:id"
          element={ <Confirmation />}
        />
        </Routes>
      </div>
    </Router>
  );
};

export default Controller;
{/* <Route
          exact
          path="/"
          render={(props) => <Home {...props} baseUrl={baseUrl} />}
        /> */}
        {/* <Route
          path="/movie/:id"
          render={(props) => <Details {...props} baseUrl={baseUrl} />}
        /> */}
        {/* <Route
          path="/bookshow/:id"
          render={(props) => <BookShow {...props} baseUrl={baseUrl} />}
        /> */}
        {/* <Route
          path="/confirm/:id"
          render={(props) => <Confirmation {...props} baseUrl={baseUrl} />}
        /> */}