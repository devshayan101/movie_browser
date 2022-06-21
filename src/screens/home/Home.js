import React from "react";
import Header from "../../common/header/Header";
import "./home.css";
import HorizontalScrollTiles from "./upComingMoviesList"
import ReleasedMovies from "./ReleasedMoviesList";
import MoviesFilterCard from "./MoviesFilterCard";
import Details from "../details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function Home() {
    return (
      <div>
        {/* <Routes>
          <Route exact path="/"> */}
        <div>
            <Header BookShowState={false}/>
            <div className="upComingMovies">
                Upcoming Movies
            </div>
            <HorizontalScrollTiles />
          <div className="rest-page-container">
              <div className="released-movies-container">
                <ReleasedMovies />
              </div>
              <div className="movies-filter-card">
                <MoviesFilterCard />
              </div>
          </div>
        </div>
          {/* </Route> */}


        {/* <Route path="/details/:id">
        <div>

          <Header BookShow={true}/>
          <Details />

        </div>
        </Route> */}
        {/* </Routes> */}
      </div>
    )
  }