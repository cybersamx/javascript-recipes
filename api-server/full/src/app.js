import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import dotenv from 'dotenv';

import * as authController from './controllers/auth';
import { initPassport } from './services/auth';

dotenv.config({ path: '.env' });

// Mongoose initialization
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndexes: true,
    })
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch((err) => {
        console.error(`Error when connecting to database: ${err}`);
        process.exit(1);
    });

// Passport initialization
initPassport();

// Express initialization
const app = express();
app.use(express.json());
app.use(passport.initialize());

// Others
const upAt = new Date(); // Server started at.

// Routes
app.get('/', authController.getHealthCheck(upAt));
app.post('/signup', authController.postSignup);
app.post('/signin', authController.postSignin);

export default app;
