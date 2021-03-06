import passport from 'passport';

import { log } from './utils';
import User from '../models/user';

export const getHealthCheck = (upAt) => (req, res) => {
    log(req, 200);
    res.status(200).json({
        health: 'ok',
        info: `uptime: ${upAt.toISOString()}`,
    });
};

export const postSignup = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) {
            return next(err);
        }
        if (foundUser) {
            res.status(401).json({
                msg: `email address ${req.body.email} has been taken`,
            });
            return;
        }

        const user = new User({
            email: req.body.email,
            password: req.body.password,
            profile: {
                fullName: req.body.fullName,
            },
        });

        user.save((err) => {
            if (err) {
                return next(err);
            }

            log(req, 200);
            res.status(200).json(user.safe());
        });
    });
};

export const postSignin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            log(req, 401);
            res.status(401).json(info);
            return;
        }

        log(req, 200);
        res.status(200).json(user);
    })(req, res, next);
};
