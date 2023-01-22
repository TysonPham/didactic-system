import React from "react";
import "./Analysis.css"

const Analysis = () => {
    return(
        <div className="analysis-container">
            <h1 className="title">
                Sentimental Analysis of a UFC Reddit Thread 
            </h1>
            <div className="description">
                An analysis of user comments on a UFC reddit thread 
                before the event and after. 
                Comments from 2 reddit thread are analysed using 
                sentiment NLP to determine if they are mostly positive 
                or negative. A word cloud is also used to demonstrate the 
                most commonly used words in the reddit thread. 
            </div>
        </div>
    )
}

export default Analysis;