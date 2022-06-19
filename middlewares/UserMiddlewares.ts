import { NextFunction, Response } from 'express';
import { ICustomRequest, IUserRequest } from '../controllers/UserController';
import { UserZodSchema } from './zodSchemas/UserSchema';

const CredentialsValidation = (req: ICustomRequest<IUserRequest>, res: Response, next: NextFunction) => {
    const { body } = req;
    
    const parsed = UserZodSchema.safeParse(body);
    if (!parsed.success) {
        return res.status(404).json(parsed.error.issues[0].message)
    }
    next();
}

export { 
    CredentialsValidation
 }