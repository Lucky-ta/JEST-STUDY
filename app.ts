require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
import express, {Express} from 'express';
import UserRouter from './routes/UserRouter';

const app = express();

app.use(express.json());

app.use('/user', UserRouter);

export default app;
