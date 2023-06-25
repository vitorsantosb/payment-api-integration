//imports
const {GetDatabase} = require('../database/db');
async function StoreUser(user){
	const collections = await GetDatabase();

	return collections.users.insertOne(
		JSON.parse(JSON.stringify(user))
	);
}

async function ExistsUserByEmail() {

}


module.exports = {StoreUser, ExistsUserByEmail};