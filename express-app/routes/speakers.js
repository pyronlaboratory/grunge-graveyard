import express from 'express';

const router = express.Router();

/*Speakers Route*/
router.get('/speakers', (request,response) => {

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
		<h1>Greetings from the Ronnies' Node.js Server</h1>
		${info}
		`);
});



/*Speaker Route*/
router.get('/speakers/:speakerid', (request,response) => {

	var speaker = dataFile.speakers[request.params.speakerid];

	response.send(`
		<h1>Greetings from the Ronnies' Node.js Server</h1>
		<h2>${speaker.title}</h2>
		<h3> - Presented by: ${speaker.name}</h3>
		<p>${speaker.summary}</p>
		`);
});

module.exports = router;
