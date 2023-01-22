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


async function getComment() {

    const response = await r.getSubmission('10gwi7g').fetch()
    const json = await response.toJSON()
    return json
}
async function getPostComment() {
    const response = await r.getSubmission('10icqsb').fetch()
    const json = await response.toJSON()
    return json
}

getComment().then(data => {
    let score = 0;
    let num = Object.keys(data).length
    for(let i = 0;i< num;i++){
        if(data.comments[i].body === undefined || data.comments[i].body === null){
            continue;
        }
        const text = data.comments[i].body;
       const doc = nlp.readDoc(text);
        score+= doc.out(its.sentiment)


    }
    console.log((score/num) )
}).catch(err => {

});



getPostComment().then(data => {
    let score = 0;
    let num = Object.keys(data).length
    for(let i = 0;i< num;i++){
        if(data?.comments[i]?.body !== undefined){
            const text = data.comments[i].body;
            const doc = nlp.readDoc(text);
            score+= doc.out(its.sentiment)
        }



    }
    console.log( (score/num) )
}).catch(err => {
console.log(err)
});


export default main;





















