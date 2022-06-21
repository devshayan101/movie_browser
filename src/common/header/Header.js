import React from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import SimpleModalWrapped from "../modal/modal_mui_v3";
import {Link} from "react-router-dom";


export default function Header( props) {
const BookShowState = props.BookShowState;
const MovieId = props.MovieId;

return (
      <nav className="nav">
        <div className="logo">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="35px" height="35px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
<path d="M352,255.5l-192,96v-192L352,255.5z M512,31.5v448H0v-448H512z M320,95.5h64v-32h-64V95.5z M224,95.5h64v-32h-64V95.5z
	 M128,95.5h64v-32h-64V95.5z M32,95.5h64v-32H32V95.5z M96,415.5H32v32h64V415.5z M192,415.5h-64v32h64V415.5z M288,415.5h-64v32h64
	V415.5z M384,415.5h-64v32h64V415.5z M480,415.5h-64v32h64V415.5z M480,127.5H32v256h448V127.5z M480,63.5h-64v32h64V63.5z"/>
</svg>
        </div>
        <ul>
          { (BookShowState===true) && (MovieId !== undefined ) ? 
            <li>
              {(window.sessionStorage.getItem('access-token')===null) ?
            <Button variant="contained" onClick={()=><SimpleModalWrapped /> }  color="primary">Book Show</Button> :
            
            <Link to={`/bookshow/${MovieId}`}><Button variant="contained" color="primary">Book Show</Button> </Link>} 

            </li>
           : null }              
                  
          <li><SimpleModalWrapped /></li>
        </ul>
      </nav>
    )
  }
              
        

