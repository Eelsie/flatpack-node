// @flow

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
import {Strategy} from 'passport-google-oauth20'


import connectDb from './connectDb'
import createEndpoints from './createEndpoints'

import type {$Application} from 'express'

export default (): $Application => {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())

  passport.use(new Strategy({
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleSecretClient,
    callbackURL: '/auth/google/callback',
  }),
  (accessToken) => {
    console.log(accessToken)
  })

  connectDb()
  createEndpoints(app)

  return app
}
