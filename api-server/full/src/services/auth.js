import moment from 'moment';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import refresh from 'passport-oauth2-refresh';

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

const googleOAuth2Handler = (req, accessToken, refreshToken, params, profile, done) => {
    User.findOne({ googleId: profile.id }, (err, foundUserByGID) => {
        if (err) {
            return done(err);
        }
        if (foundUserByGID) {
            return done(null, foundUserByGID);
        }
        const primaryEmail = profile.emails[0].value;
        User.findOne({ email: primaryEmail }, (err, foundUserByEmail) => {
            if (err) {
                return done(err);
            }
            if (foundUserByEmail) {
                return done(null, null, { msg: 'There is an account using this email address.' });
            }

            // Create a new User from a provider sign-in.
            const user = new User();
            user.email = primaryEmail;
            user.googleId = profile.id;
            user.tokens.push({
                kind: 'google',
                accessToken,
                accessTokenExpires: moment().add(params.expires_in, 'seconds').format(),
                refreshToken,
            });
            user.profile.name = profile.displayName;
            user.profile.gender = profile._json.gender;
            user.profile.avatar = profile._json.picture;
            user.save((err) => done(err, user));
        });
    });
};

export function initPassport() {
    // Local authentication using email and password.
    passport.use(new LocalStrategy({ usernameField: 'email' }, localAuthHandler));

    // Google OAuth2.
    const googleOAuth2Strategy = new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
            callbackURL: '/oauth/google/callback',
            passReqToCallback: true,
        },
        googleOAuth2Handler,
    );
    passport.use('google', googleOAuth2Strategy);
    refresh.use('google', googleOAuth2Strategy);
}
