const router = require('express').Router();
const userData = require('../../repositories/dto/user');
const {StoreUser} = require('../../repositories/user.repository');
const GenerateUserId = require('../../config/idGenerator');

async function Register(user) {
	const userInput = {
		user,

		createdAt: Date(),
		updatedAt: null,
	};

	await StoreUser(userInput);

	return userInput;
}

router.post('/register', async (req, res, next) => {
	const user = CreateUserData('vitor', GenerateUserId(), 'vitor@gmail.com', hash);

	await Register(user);

	res.send('ok');
});