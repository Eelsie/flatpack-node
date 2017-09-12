// @flow

import createPost from '$modules/post/createPost'
import passport from 'passport'
import getPost from '$modules/post/getPost'
import notFound from '$modules/errors/404'

import {auth} from '$modules/post/middlewares'

export default {
  'get /auth/google': {handler: passport.authenticate('google', {scope: ['profile', 'email']})},
  'get /auth/google/callback': {handler: (passport.authenticate('google'), (req, res) => {res.redirect('http://localhost:3000/home')})},
  // $FlowFixMe
  'get /api/logout': {handler: (req, res) => {req.logout(); res.redirect('http://localhost:3000')}},
  'post /posts': {handler: createPost, middlewares: [auth]},
  'get /posts/:id': {handler: getPost},
  'get *': {handler: notFound},
  'get /api/current_user': {handler: ((req, res) => {res.send(req.user)})},
}
