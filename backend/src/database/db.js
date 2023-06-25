// eslint-disable-next-line no-unused-vars
const { MongoClient, Collection } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

/**
 * @type {{collections: {[collection: string]: Collection}, connection: null, db: null}}
 */
const database = {
	connection: null,
	db: null,
	collections: null
};

async function mountCollections (db) {
	return {
		users: db.collection('users'),
		products: db.collection('products'),
	};
}

async function GetDatabase () {
	if (!database.connection) {
		database.connection = await client.connect();
		database.db = client.db('payment-api');
	}

	database.collections = await mountCollections(database.db);

	return database;
}

module.exports = { GetDatabase };