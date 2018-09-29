import express from 'express';

const router = express.Router();

/*Base Route*/
router.get('/', (request,response) => {

	response.send(`
		<h1>Welcome Peeps!</h1>
		`);
});

module.exports = router;
