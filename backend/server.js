/* const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 9000;
const ipAdress = "127.0.0.1";
const listenFun = () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`); //nem a browserbe írja ki, hanem terminalba
		console.log(`Everything is going to be alright`);
	}

const serverFun = (req, res) => {

		const errorHTML = `You lost your way`;
		
		//let filePath = path.resolve(__dirname + '/../frontend' + req.url);
		let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);
		
		fs.access(filePath, fs.constants.R_OK, (err) => {
		if(err){
			res.statusCode = 404;
			res.end(errorHTML);
		} else {
			if(fs.statSync(filePath).isDirectory()) {
				filePath += '/index.html';
			}
			fs.readFile(filePath, (err, data) => {
				if(err) {
					res.statusCode = 500;
					res.end(errorHTML);
				} else {
					console.log("az index html kiszolgálódott");
					res.end(data);
				}
			});
		}
		});
}

const server = http.createServer(serverFun);

server.listen(port, ipAdress, listenFun); */

const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
});

app.use("/pub", express.static(`${__dirname}/../frontend/pub`));

app.listen(port, () => {
	console.log("http://127.0.0.1:9000");
})