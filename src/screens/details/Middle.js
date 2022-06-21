import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import YouTube from "react-youtube";

const boxStyle = {
    // marginLeft: "24px",
    // marginTop: "8px",
    // marginRight: "24px",
    // marginBottom: "10px",
    // height:"24px",
}

export default function DetailsMiddle(props) {
    let videoCode;
    if (props.middleDataTrailerUrl) {
        videoCode = props.middleDataTrailerUrl.split("v=")[1].split("&")[0];
      }
    
      const opts = {
        // height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      

    return (
        <div className="details-middle-container">
            <div style={boxStyle} >
                <h2>{props.middleDataTitle}</h2>
                <span><b>Genres:</b>{props.middleDataGenres}</span> <br />
                <span><b>Duration:</b>{props.middleDataDuration}</span> <br />
                <span><b>Release Date:</b>{props.middleDataReleaseDate}</span> <br />
                <span><b>Rating:</b>{props.middleDataRating}</span>
                <br/>
                <br/>
                <span><b>Plot:</b><a href={props.middleDataWikiUrl}>(Wiki Link)</a>{props.middleDataStoryLine}</span>
                <br/>
                <br/>
                <div><b>Trailer:</b>
                <br/> <br />
                {/* {middleDataTrailerUrl} */}
                <YouTube style={{marginTop:"16px"}}
                    videoId={videoCode}
                    opts={opts}
                    // onReady={this._onReady}
                />
                </div>
            </div>
        </div>)    
}
