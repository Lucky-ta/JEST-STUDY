import { Request, Response } from 'express'
import { registerUser } from '../services/UserServices';

export interface IUserRequest{
    name: string;
    email: string;
    password: string
}

export interface ICustomRequest<T> extends Request {
    body: T;
}

const register = async (req: ICustomRequest<IUserRequest>, res: Response) => {
    try {
        const { body } = req;
        const result = await registerUser(body);
        return res.status(result.status).json(result.data)
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}

export {
    register
}