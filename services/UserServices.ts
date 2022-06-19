const { User } = require('../../models');
import { UserType } from "../types/UserTypes"

const registerUser = async (user: UserType) => {
    const registerUser = await User.create(user);
    if (!registerUser) {
        return {
            status: 404,
            data: { message: 'Not created' }
        }
    } return {
        status: 201,
        data: registerUser,
    }
}

export {
    registerUser,
}