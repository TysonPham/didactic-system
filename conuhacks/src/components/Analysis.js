import React from "react";
import "./Analysis.css";
import UFC from './UFC.png';


const Analysis = () => {
    return(
        <div className="analysis-container" id='analysis'>
            <h1 className="title">
                Sentimental Analysis of a UFC Reddit Thread
            </h1>
            <div className="main-container">
                <div className="reddit-item">
                    An analysis of user comments on a UFC reddit thread 
                    before the event and after. 
                    Comments from 2 reddit thread are analysed using 
                    sentiment NLP to determine if they are mostly positive 
                    or negative. A word cloud is also used to demonstrate the 
                    most commonly used words in the reddit thread. 
                    <br>
                    </br>
                    <br>
                    </br>
                    <h2>
                        First Thread: <br>
                        </br>[Official] UFC 283: Teixeira vs. Hill Weigh-In & Pre-Fight Discussion Thread
                    </h2>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h2>
                        Second Thread: <br>
                        </br>[Official] UFC 283: Teixeira vs. Hill Weigh-In & Post-Fight Discussion Thread
                    </h2>
                </div>
                <div className="reddit-item">
                    <div className="poster-img-div">
                        <img className="poster-img" src={UFC} alt="UFC" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis;