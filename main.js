'use strict';
const snoowrap = require('snoowrap');
require('dotenv').config()

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

getComment().then(data => {
    for(let i = 0;i< Object.keys(data).length;i++){
        console.log(data.comments[i].body);
    }

}).catch(err => {
    console.log(err);
});















