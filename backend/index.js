const CreateAndStorageUser = require('./src/test/createUser.test');
async function serverInit() {

	const http = require('http');
	const app = require('./src/routes/app');
	const port = process.env.PORT || 3000;
	const server = http.createServer(app);
	server.listen(port, () => {
		console.log('[ROUTER] routes is now enabled: ' + port + ' | ' + new Date());
	});

}

async function init(){
	await serverInit();
}

init().catch(function (err){
	console.log(err);
});

