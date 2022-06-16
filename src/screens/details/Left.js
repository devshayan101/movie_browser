import React from "react";
import Data from "./data";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const styleLeft = {
    marginLeft: "24px",
    marginTop: "8px",
    marginBottom: "0px",
    height:"24px",

}

export default function DetailsLeft() {
    return (
        <div className="details-left-container">
            <div className="details-left-top">
                <Box style={styleLeft}>
                <Typography variant="button" display="block" gutterBottom>
                    <Link to="/">
                        &#60; Back to Home
                    </Link>
                </Typography>
                </Box>   
            </div>
            <div className="details-left-bottom">

            </div>        
        </div>    
)}