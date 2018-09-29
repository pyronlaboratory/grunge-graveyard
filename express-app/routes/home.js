import express from 'express';

const router = express.Router();

/*Base Route*/
router.get('/', (request,response) => {

	response.send(`
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<h1>Welcome Peeps!</h1>
		<img src="/images/misc/background.jpg"
		alt="background" style="height: 80%;">
		<p>To all my gangstas' and all my thugs! Throw'em hands and show'em some love! I say welcome ya'll to the Detriot City!</p>
		`);
});

module.exports = router;
