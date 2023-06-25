function CreateUserData(user, generatedId, userEmail, passwordHash,) {
	return {
		user: {
			id: generatedId,
			user: {
				username: user.name,
				lastName: user.lastName,
				birthday: user.birthday,
			},
			password: passwordHash,
			email: userEmail,
		},
		paymentMethod: {},
		purchase_history: {},
		permissions: {},
	};
}

module.exports = {CreateUserData};