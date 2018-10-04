import express from 'express';
import dataFile from './data/data.json';
import reload from 'reload';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine','ejs');
app.set('views','./app/views')

app.locals.siteTitle = 'Grunge Graveyard';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('./app/public'))
app.use(require('./routes/home'));
app.use(require('./routes/speakers'));


const server = app.listen(app.get('port'), ()=> {
	console.log("Server initiated on localhost:" + app.get('port'))
});


reload(server, app);




















/*var http = require('http');

var myServer = createServer((request, response)=>{
	response.writeHead(200, {"Content-Type" : "text/plain"(or html)
	});
	response.write('<h1>Grunge Graveyard</h1>');
	response.end();
});

myServer.listen(3000);
console.log('Go to http://localhost:3000 on your browser');
*/