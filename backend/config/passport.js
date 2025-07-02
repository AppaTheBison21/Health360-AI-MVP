import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import AppleStrategy from 'passport-apple';
import User from '../models/user.js';

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: '/api/users/auth/google/callback'
// }, async (accessToken, refreshToken, profile, done) => {
//   // TODO: Find or create user
//   let user = await User.findOne({ googleId: profile.id });
//   if (!user) {
//     user = await User.create({ googleId: profile.id, email: profile.emails[0].value });
//   }
//   done(null, user);
// }));

// passport.use(new AppleStrategy({
//   clientID: process.env.APPLE_CLIENT_ID,
//   teamID: process.env.APPLE_TEAM_ID,
//   keyID: process.env.APPLE_KEY_ID,
//   privateKeyLocation: process.env.APPLE_PRIVATE_KEY_PATH,
//   callbackURL: '/api/users/auth/apple/callback'
// }, async (accessToken, refreshToken, idToken, profile, done) => {
//   // TODO: Find or create user
//   let user = await User.findOne({ appleId: profile.id });
//   if (!user) {
//     user = await User.create({ appleId: profile.id, email: profile.email });
//   }
//   done(null, user);
// }));
