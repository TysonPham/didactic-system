import React, { useRef } from 'react';
import "./Forms.css"
const winkNLP = require('wink-nlp');
const model = require('wink-eng-lite-web-model');
const nlp = winkNLP(model);
const its = nlp.its;
const as = nlp.as;
const Forms = () => {

    const form = useRef();
    const[relationship1Score, SetRelationship1Score] = React.useState(0);
    const[relationship2Score, SetRelationship2Score] = React.useState(0);
    const[perception1Score, SetPerception1Score] = React.useState(0);
    const[perception2Score, SetPerception2Score] = React.useState(0);
    const[totalScore, SetTotalScore] = React.useState(0);

    const sendEmail = (e) => {
    e.preventDefault();

    const relationship1 =document.getElementById("answer1").value;
    const relationship2 =document.getElementById("answer2").value;
    const perception1 =document.getElementById("answer3").value;
    const perception2 =document.getElementById("answer4").value;



        //user input
        //return int -1 to 1
        let sentiment = (input)=>{
            const text = input;
            const doc = nlp.readDoc(text);
            return (doc.out(its.sentiment));

        }

        SetRelationship1Score(sentiment(relationship1));
        SetRelationship2Score(sentiment(relationship2));
        SetPerception1Score(sentiment(perception1));
        SetPerception2Score(sentiment(perception2));
        SetTotalScore((sentiment(relationship1) + sentiment(relationship2) + sentiment(perception1) + sentiment(perception2)) /5);



    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Survey</h2>
            <span className="section__subtitle">Help us help you</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                        <h3 className="contact__title">Relationships</h3>

                        <form ref={form} onSubmit={sendEmail} className="contact__form">
                            <div className="contact__form-div contact__form-area">
                                <textarea id="answer1" name="project" cols="30" rows="10"
                                placeholder="Describe relationship with coworkers..."
                                className="contact__form-input"></textarea>
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <textarea id="answer2" name="project" cols="30" rows="10"
                                placeholder="Describe relationship with Mentor/Supervisor..."
                                className="contact__form-input"></textarea>
                            </div>
                        </form>
                </div>

                <div className="contact__content">
                        <h3 className="contact__title">Perceptions</h3>

                        <form ref={form} onSubmit={sendEmail} className="contact__form">
                            <div className="contact__form-div contact__form-area">
                                <textarea id="answer3" name="project" cols="30" rows="10"
                                placeholder="Describe how you percieve your current tasks and workload..."
                                className="contact__form-input"></textarea>
                            </div>
                            <div className="contact__form-div contact__form-area">
                                <textarea id="answer4" name="project" cols="30" rows="10"
                                placeholder="Describe how you percieve your workspace..."
                                className="contact__form-input"></textarea>
                            </div>
                            <div className='button__middle'>
                                <button className="button button--flex">Submit</button>
                            </div>
                        </form> 
                </div>
                `<div> {relationship1Score} {relationship2Score} {perception1Score} {perception2Score} {totalScore}</div>   `
            </div>
        </section>
    )
}

export default Forms;