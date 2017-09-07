//@flow

import passport from 'passport'
import {Strategy} from 'passport-google-oauth20'
import {googleClientID, googleSecretClient} from './googleId'

passport.use(new Strategy({
  clientID: googleClientID,
  clientSecret: googleSecretClient,
  callbackURL: '/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
  console.log('access token:', accessToken)
  console.log('refresh token:', refreshToken)
  console.log('profile:', profile)
}))
