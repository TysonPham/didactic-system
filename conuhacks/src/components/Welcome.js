import React from "react";
import "./Welcome.css"
import Office from './Office.png';
import CEO from './CEO.png';
import Manager from './Manager.png';
import Intern1 from './Intern1.png';
import Intern2 from './Intern2.png';

const Welcome = () => {

    return (
    <div className="container">
        <h1 className= "title">Welcome to the GSoft Team</h1>
        <div className="title-intro">
            We are excited to have you onboard of our team. We hope you are ready meet a wonderful team and face new challenges.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more versions of Lorem Ipsum.

        </div>
        <div className="office-container">
            <div className="office-item">
                <div className="office-first-title">
                    Discover the Office Life.
                </div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="office-item">
                <div className="office-img-div">
                    <img className="office-img" src={Office} alt="Office" />
                </div>
            </div>
        </div>
        <h2 className="office-title">
            Meet our wonderful team.
        </h2>
        <div className="team-container">
            <div className="team-item">
                <img className="team-img" src={CEO} alt="CEO" />
            </div>
            <div className="team-item">
                <h3>
                    CEO: Simon De Baene
                </h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="team-item">
                <img className="team-img" src={Manager} alt="Manager" />
            </div>
            <div className="team-item">
                <h3>
                    General Manager: Martin Gourdeau
                </h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="team-item">
                <h3>
                    Kahina Ouerdane (past intern)
                </h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="team-item">
                <img className="team-img" src={Intern1} alt="Intern1" />
            </div>
            <div className="team-item">
                <h3>
                    Jean-Luc Brisebois (past intern)
                </h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="team-item">
                <img className="team-img" src={Intern2} alt="Intern2" />
            </div>
        </div>
    </div>
    )
}

export default Welcome;