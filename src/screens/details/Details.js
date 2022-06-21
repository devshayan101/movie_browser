import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./Details.css";
import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "../../common/header/Header";

// import useFetch from "../../common/data/useFetch";
//fetch data 
//use fetched data


export default function Details(){
const {id} = useParams();
const [itemList, setItemList] = useState([]);
const [DataisLoaded, setDataisLoaded] = useState(false);

useEffect(() => {
  fetch("http://localhost:8085/api/v1/movies/"+id)
      .then((res) => {return res.json()})
      .then((json) => {
              setItemList(json);
              setDataisLoaded(true);
      })
    },[]);
    console.log(itemList);
    const MovieId = id;

    const leftData = itemList.poster_url;

    const middleDataTitle = itemList.title;
    const middleDataGenres = itemList.genres;
    const middleDataDuration = itemList.duration;
    const middleDataReleaseDate = itemList.release_date;
    const middleDataRating = itemList.rating;
    const middleDataWikiUrl = itemList.wiki_url;
    const middleDataStoryLine = itemList.storyline;
    const middleDataTrailerUrl = itemList.trailer_url;

    const rightDataArtistsProfile = itemList.artists;

    return (
        <div>
            <Header BookShowState={true} MovieId={MovieId}/>

            <div className="details-container">
                <div className="details-left">
                    <Left Data={leftData}/>
                </div>   

                <div className="details-middle">
                    <Middle 
                        middleDataTitle={middleDataTitle}
                        middleDataGenres={middleDataGenres}
                        middleDataDuration={middleDataDuration}
                        middleDataReleaseDate={middleDataReleaseDate}
                        middleDataRating={middleDataRating}
                        middleDataWikiUrl={middleDataWikiUrl}
                        middleDataStoryLine={middleDataStoryLine}
                        middleDataTrailerUrl={middleDataTrailerUrl}
                    />
                </div>

                <div className="details-right">
                    <Right rightDataArtistsProfile={rightDataArtistsProfile}/>
                </div>       
            </div>    
        </div>    
)}
 