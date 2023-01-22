const snoowrap = require('snoowrap');
require('dotenv').config()
const winkNLP = require('wink-nlp');
const model = require('wink-eng-lite-web-model');
const nlp = winkNLP(model);
const its = nlp.its;
const as = nlp.as;

const r = new snoowrap({
    userAgent: 'hi',
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
});


async function getPreComment() {

    const response = await r.getSubmission('10gwi7g').fetch();
    const json = await response.toJSON();
    return json;
}
async function getComment() {

    const response = await r.getSubmission('10i3xfg').fetch()
    const json = await response.toJSON()
    return json
}







// getPreComment().then(data => {
//
//     for (let i = 0; i < Object.keys(data).length; i++) {
//         const text = data.comments[i].body;
//         const doc = nlp.readDoc(text);
//
//       //  console.log(doc.sentences().out())
//         //console.log(doc.out() + ' Sentiment value: ' + doc.out(its.sentiment))
//         console.log(doc.tokens().out())
//
//        console.log( doc.tokens()
//             .filter(
//                 // Exclude nouns inside an entity
//                 (t) => !t.parentEntity() && t.out(its.pos) === 'VERB'
//
//             )
//             .out());
//
//
//
//     }

    //argument should take in fighter name
    //return meaningful words that are, adjective, verbs, adverbs
   async function getDescriptivewords(){
        getPreComment().then(data => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                const text = data.comments[i].body;
                const doc = nlp.readDoc(text);
                //console.log(doc.tokens().out())

                console.log( doc.tokens()
                    .filter(
                        (t) => !t.parentEntity() && t.out(its.pos) === 'VERB').out());
            }
        })
    }


    getDescriptivewords()
    //argument should take in fighter name
    //return sentiment value
    //async function getSentimentValue(){}
















