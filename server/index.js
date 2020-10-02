/**
 * Baku backend to handle data requests
 *
 * Christopher Apodaca
 * Oct. 1, 2020
 * https://www.christopher-apodaca.com
 * MIT License
 */

const express = require('express');
const PORT = 7777;
const server = express();
const cors = require('cors');
const app = express();
const axios = require('axios');
var FormData = require('form-data');

app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

/**
 * GET: /
 * Establish PING PONG
 * @params {Object} req - request from client
 * @params {Object} res - response to client
 */
app.get('/', (req, res) => {
	res.status(200).send('Success: Baku up on ' + PORT + '!');
});

// Start the server
app.listen(PORT, () => {
	console.log('Baku has awakened on PORT:' + PORT + '!');
});

/**
 * POST: /sprunge
 * Post CSV to url: req.body.mediaURL
 * @params {Object} req - request from client
 * @params {Object} res - response to client
 */
app.post('/sprunge', (req, res) => {
	let file = req.file;
	console.log(file);

	/*
	const form = new FormData();
	form.append('buffer', datapoints);
	form.append('content-type', 'text/csv');

	console.log(form.getHeaders());

	var config = {
		method: 'post',
		url: 'http://sprunge.us',
		headers: form.getHeaders(),
		body: form
	};

	axios(config)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.log(error);
	});
*/
	res.status(200).send('Success: Sprunge sent!');
});

