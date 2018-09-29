import express from 'express';

const router = express.Router();

/*Speakers Route*/
router.get('/speakers', (request,response) => {

	var info = '';
	let dataFile = request.app.get('appData');
	dataFile.speakers.forEach((item) => {
		info += `
		<li>
			<h2>${item.name}</h2>
			<img src="/images/speakers/${item.shortname}_tn.gif"
		alt="speaker" style="max-width:200px; border-radius: 50%;">
			<p>${item.summary}</p>	
		</li>
		`;
	});

	response.send(`
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<h1>Greetings from the Ronnies' Node.js Server</h1>	
		${info}
		`);
});



/*Speaker Route*/
router.get('/speakers/:speakerid', (request,response) => {

	let dataFile = request.app.get('appData');
	var speaker = dataFile.speakers[request.params.speakerid];

	response.send(`
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<h1>${speaker.title}</h1>
		<img src="/images/speakers/${speaker.shortname}_tn.gif"
		alt="speaker" style="max-width:200px; border-radius: 50%;">	
		<h3>Presented by: ${speaker.name}</h3>
		<p>${speaker.summary}</p>
		`);
});

module.exports = router;
