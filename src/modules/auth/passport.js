//@flow

import passport from 'passport'
import {Strategy} from 'passport-google-oauth20'
import User from '$db/models/User'
import {googleClientID, googleSecretClient} from '../../keys'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
})

passport.use(new Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID || googleClientID,
  clientSecret: process.env.GOOGLE_SECRET_CLIENT || googleSecretClient,
  callbackURL: '/auth/google/callback',
  proxy: true,
},
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({googleId: profile.id})
  if (existingUser) {
    return done(null, existingUser)
  }
  const user = await new User({
    googleId: profile.id,
    displayName: profile.displayName,
    name: profile.name,
    emails: profile.emails,
    image: profile.photos,
  }).save()
  done(null, user)
}))
