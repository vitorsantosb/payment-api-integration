const uuid = require('uuid');
const {StoreUser} = require('../repositories/user.repository');

async function CreateAndStorageUser() {
	const user = {
		user: {
			id: uuid.v4(),
			user: {
				username: 'shalom',
				lastName: '2222',
				birthday: '12/02/2000',
			},
			password: 'examplePassword',
			email: 'email@test.com',
		},
		paymentMethod: {},
		purchase_history: {},
		permissions: {},
	};
	console.log(user);
	await StoreUser(user);
}

module.exports = CreateAndStorageUser;