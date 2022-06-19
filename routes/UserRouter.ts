import { Router } from "express";
import { register } from "../controllers/UserController";
import { CredentialsValidation } from "../middlewares/UserMiddlewares";

const UserRouter = Router();

UserRouter.post('/', CredentialsValidation, register);

export default UserRouter;
