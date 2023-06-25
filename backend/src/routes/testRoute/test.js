const CreateAndStorageUser = require('../../test/createUser.test');
const router = require('express').Router();

router.post('/test', async (req, res, next) => {
	try {
		if (await CreateAndStorageUser()) {
			res.status(201).send({
				status: 'Successfully',
				message: 'Test user is created and storage on db',
				request: {
					method: 'POST',
					description: 'Created test user from application',
					url: process.env.PATH_URL + '/test'
				}
			});
		}
		;

	} catch (err) {
		res.status(500).send({
			status: 'failure',
			message: 'failure to execute test on route.',
			request: {
				method: 'POST',
				description: 'Trying to register new test user on db',
				url: process.env.PATH_URL + '/test'
			}
		});
	}
});

module.exports = router;