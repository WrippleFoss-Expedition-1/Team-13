
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.post('/botResponse', (req, res) => {

    var reminderPurpose = req.body.queryResult.parameters["reminder-entity"]["reminder-purpose"];
	var reminderDateTime = req.body.queryResult.parameters["reminder-entity"]["date-time"];
	var botReply;		
	botReply="You have to "+reminderPurpose["reminder-verb"]+" your "+reminderPurpose["reminder-noun"]+" at "+reminderDateTime["date_time"];
    return res.json({
		fulfillmentText:botReply,
		source: 'botResponse'
		});
});

server.listen((process.env.PORT || 8081), () => {
    console.log("It's up and running...");
});