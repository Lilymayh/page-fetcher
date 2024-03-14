const { url } = require('inspector');
const request = require('./request');
const fs = require('fs');

const writeToFile = (url, filename) => {
	request.getrequest(url, (error, response, body) => {
		console.log("error: ", error);
		console.log("response: ", response && response.statusCode);
		console.log("body: ", body);
	})

	fs.WriteFile(filename, (body) => {
		console.log(`Downloaded and saved ${body.length} bytes to ${filename}`);
	})
};
