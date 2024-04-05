const writeToFile = (url, filename) => {
	request(url, (error, response, body) => {
		if (error) {
			console.error('Error:', error);
			return;
		}
		if (response.statusCode !== 200) {
			console.error('Failed to fetch URL:', response && response.statusCode);
			return;
		}

		fs.writeFile(filename, body, (err) => {
			if (err) {
				console.error('Error writing to file:', err);
				return;
			}
			console.log(`Downloaded and saved ${body.length} bytes to ${filename}`);
		});
	});
};

module.exports = writeToFile;
