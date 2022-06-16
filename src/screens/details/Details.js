import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import "./Details.css";

export default function Details(){
    return (
        <div>
            <div className="details-container">
                <div className="details-left">
                    <Left />
                </div>   
                <div className="details-middle">
                    <Middle />
                </div>
                <div className="details-right">
                    <Right />
                </div>       
            </div>    
        </div>    
)}