import express from 'express';
import dataFile from './data/data.json';


const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (request,response) => {

	var info = '';
	dataFile.speakers.forEach((item) => {
		info += `
		<li>
			<h2>${item.name}</h2>
			<p>${item.summary}</p>	
		</li>
		`;
	});



	response.send(`
		<h1>Greetings from the Node.js Server</h1>
		${info}
		`);
});

app.listen(app.get('port'), ()=> {
	console.log("Server initiated on localhost:" + app.get('port'))
});











/*var http = require('http');

var myServer = createServer((request, response)=>{
	response.writeHead(200, {"Content-Type" : "text/plain"(or html)
	});
	response.write('<h1>Roux Meetups</h1>');
	response.end();
});

myServer.listen(3000);
console.log('Go to http://localhost:3000 on your browser');
*/