//imports
import {GetDatabase} from '../database/db';
async function StoreUser(user){
	const collections = await GetDatabase();

	return collections.users.insertOne(
		JSON.parse(JSON.stringify(user))
	);
}

async function UserExistsById(user, userId){

}


module.exports = {StoreUser};