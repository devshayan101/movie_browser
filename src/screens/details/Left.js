import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const styleLeft = {
    marginLeft: "24px",
    marginTop: "8px",
    marginBottom: "0px",
    height:"24px",
}

export default function DetailsLeft(props) {
    return (
        <div className="details-left-container">
            <div className="details-left-top">
                <Box style={styleLeft}>
                <Typography variant="button" display="block" gutterBottom>
                    <Link style={{textDecoration:"none"}} to="/">
                        &#60; Back to Home
                    </Link>
                </Typography>
                </Box>   
            </div>
            <div className="details-left-bottom">
                <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={props.Data}
                        // alt="green iguana"
                    />
                </Card>
            </div>        
        </div>    
)}