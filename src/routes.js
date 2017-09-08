// @flow

import createPost from '$modules/post/createPost'
import passport from 'passport'
import getPost from '$modules/post/getPost'
import notFound from '$modules/errors/404'

import {auth} from '$modules/post/middlewares'

export default {
  'get /auth/google': {handler: passport.authenticate('google', {scope: ['profile', 'email']})},
  'get /auth/google/callback': {handler: passport.authenticate('google')},
  // $FlowFixMe
  'get /api/current_user': {handler: (req, res) => {res.send(req.user)}},
  // $FlowFixMe
  'get /api/logout': {handler: (req, res) => {req.logout(); res.send(req.user)}},
  'post /posts': {handler: createPost, middlewares: [auth]},
  'get /posts/:id': {handler: getPost},
  'get *': {handler: notFound},
}
