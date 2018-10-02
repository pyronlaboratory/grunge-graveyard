import express from 'express';

const router = express.Router();

/*Speakers Route*/
router.get('/speakers', (request,response) => {

	var info = '';
	let dataFile = request.app.get('appData');
	dataFile.speakers.forEach((item) => {
		info += `
		<li style="display:block">
			<h2 style="text-align:center">${item.name}</h2>
			<img src="/images/speakers/${item.shortname}_tn_x.jpg"
		alt="speaker" style="width:200px; border-radius: 50%; display:block; margin-left: auto; margin-right: auto;">
				
		</li>
		`;
	});

	response.send(`
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<div style="background: url(../images/misc/background.jpg) no-repeat center center fixed; top: 0; left: 0; min-width: 100%;
  min-height: 100%;">
		<br>
		<h1 style="text-align:center"><b>Grunge Graveyard - All Legends</b></h1>	
		${info}
		</div>
		`);
});



/*Speaker Route*/
router.get('/speakers/:speakerid', (request,response) => {

	let dataFile = request.app.get('appData');
	var speaker = dataFile.speakers[request.params.speakerid];

	response.send(`
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<h1 style="text-align:center">${speaker.title}</h1>
		<img src="/images/speakers/${speaker.shortname}_tn_x.jpg"
		alt="speaker" style="width:200px; border-radius: 50%; display:block; margin-left: auto; margin-right: auto;">	
		<h3 style="text-align:center">Lead Vocalist: ${speaker.name}</h3>
		<p>${speaker.summary}</p>
		`);
});

module.exports = router;
