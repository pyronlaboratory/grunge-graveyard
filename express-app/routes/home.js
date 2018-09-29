import express from 'express';

const router = express.Router();

/*Base Route*/
router.get('/', (request,response) => {

	response.send(`
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<div class="hero-image">
  		<div class="hero-text">
    	<h1><strong>Grunge Graveyard</strong></h1>
    	<p>I'm the man in the box..Buried in my shit. Won't you come and save me? Save me? Feed my eyes, can you sew them shut? Jesus Christ, deny your maker. He who tries, will be wasted. Feed my eyes now you've sewn them shut</p>
		</div>
		</div>
		`);
});

module.exports = router;
