// @flow

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import passport from 'passport'
import {cookieKey} from '../keys'
import connectDb from './connectDb'
import createEndpoints from './createEndpoints'
import '../modules/auth/passport'

import type {$Application} from 'express'

export default (): $Application => {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  connectDb()
  createEndpoints(app)

  return app
}
