/**
 * Baku backend to handle data requests
 *
 * Christopher Apodaca
 * Oct. 1, 2020
 * https://www.christopher-apodaca.com
 * MIT License
 */

const PORT = 7777;
const axios = require('axios');
const {Readable} = require('stream');
var http = require('http');
var inspect = require('util').inspect;
var Busboy = require('busboy');
var FormData = require('form-data');

const trySprunge = (fileData, callBack) => {

	var formData = new FormData();
	const fileBuffer = new Readable();
	fileBuffer._read = () => {};
	fileBuffer.push(fileData[0]);
	fileBuffer.push(null);

	formData.append('sprunge', fileBuffer);

	var config = {
		method: 'post',
		url: 'http://sprunge.us',
		headers: { 
			'Accept': '*/*',
			'Content-Type': 'multipart/form-data', 
			'Connection':'Keep-Alive',
			...formData.getHeaders()
		},
		data : formData
	};

	axios(config)
	.then(function (response) {
		callBack(response.data);
	})
	.catch(function (error) {
		callBack(error);
		console.log(error);
	});
};

http.createServer(function(req, res) {
	var base64data = [];

	if (req.method === 'POST') {
		var busboy = new Busboy({ headers: req.headers });

		busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
			console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
			var buffer ='';
			file.on('data', function(data) {
				console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
				buffer+=data;
			});

			file.on('end', function() {
				console.log('File [' + fieldname + '] Finished');
				base64data.push(buffer);
			});
		});

		busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
			console.log('Field [' + fieldname + ']: value: ' + inspect(val));
		});

		busboy.on('finish', function() {

			if (base64data.length > 0) {

				trySprunge(base64data, function(sprunge) {
					console.log(JSON.stringify(sprunge));
					res.writeHead(200, { Connection: 'close'});
					res.end(sprunge);
				});
			} else {
				res.writeHead(303, { Connection: 'close', Location: '/' });
				res.end();
			}
		});

		req.pipe(busboy);
	} 
}).listen(PORT, function() {
	console.log('Baku Server listening on '+PORT);
});

