import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
        },
        password: String,
        salt: String,
        googleUserName: String,
        fullName: String,
        avatar: String,
    },
    { timestamp: true },
);

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

UserSchema.methods.safe = function () {
    const cloned = { ...this._doc };
    delete cloned.password;
    return cloned;
};

const User = mongoose.model('User', UserSchema);

export default User;
