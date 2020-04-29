import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/user';

const localAuthHandler = (email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, null, { msg: `${email} does not exist` });
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, null, { msg: 'password does not match' });
            }
            return done(null, user.safe());
        });
    });
};

export function initPassport() {
    // Configure local authentication using email and password.
    passport.use(new LocalStrategy({ usernameField: 'email' }, localAuthHandler));
}
