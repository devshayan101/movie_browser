import React from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import SimpleModalWrapped from "../modal/modal_mui_v3";

export default function Header( props) {
const BookShow = props.BookShow;
    return (
      <nav className="nav">
        <div className="logo">
          <img src="../../assets/logo.svg" alt="logo"  />
        </div>
        <ul>
          { (BookShow===true) ? 
            <li>
            <Button variant="contained" color="primary">Book Show</Button>          
            </li>
           : null }              
                  
          <li><SimpleModalWrapped /></li>
        </ul>
      </nav>
    )
  }
              
        

