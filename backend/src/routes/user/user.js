const bcrypt = require('bcryptjs');
const {uuidV4} = require('uuid');
const {StoreUser, ExistsUserByEmail} = require('../../repositories/user.repository');
const {CreateUserData} = require('../../repositories/dto/user');
const router = require('express').Router();

router.post('/register', async (req, res, next) => {

	if (await ExistsUserByEmail(req.body.email)) {
		res.status(200).send({
			status: 'failure',
			message: 'User exists',
			request: {
				method: 'POST',
				description: 'Trying to register new user',
				url: process.env.PATH_URL + '/user/register'
			}
		});
	} else {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(req.body.password, salt, async function (err, hash) {
				if (err) {
					return res.status(500).send({
						message: 'Error',
						error: err,
						request: {
							method: 'POST',
							description: 'error to create a new user',
							URL: process.env.PATH_URL + '/user/register'
						},
					});
				}

				const user = {
					username: req.body.username,
					lastname: req.body.lastname,
					birthday: req.body.birthday,
				};

				const newUser = CreateUserData(
					user,
					uuidV4(),
					req.body.email,
					hash,
				);

				await StoreUser(newUser);

				const response = {
					message: 'Successfully registered new user',
					request: {
						method: 'POST',
						description: 'Register new user',
						URL: process.env.PATH_URL + '/user/register'
					},
					user: {
						username: req.body.username,
						email: req.body.email,
					}
				};

				res.status(200).send(response);
			});
		});


	}
});

module.exports = router;