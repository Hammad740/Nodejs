import { Router } from 'express';
import express from 'express';
import { handleUserSignUp, handleUserLogin } from '../controllers/user.js';

const userRouter = new Router();

userRouter.post('/', handleUserSignUp);
userRouter.post('/login', handleUserLogin);

export default userRouter;
