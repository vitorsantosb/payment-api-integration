function CreateUserData(user, generatedId, userEmail, passwordHash, ...filter){
    return{
        user: {
            id: generatedId,
            username: user,
            password: passwordHash,
            email: userEmail,
        },
        permissions: {},
        ...filter
    }
}