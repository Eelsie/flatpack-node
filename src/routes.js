// @flow

import createPost from '$modules/post/createPost'
import passport from 'passport'
import getPost from '$modules/post/getPost'
import googleFetchLogin from '$modules/auth/googleFetchLogin'
import getUser from '$modules/user/getUser'
import notFound from '$modules/errors/404'

import {auth} from '$modules/post/middlewares'

export default {
  'get /auth/google': {handler: passport.authenticate('google', {scope: ['profile', 'email']})},
  'get /auth/google/callback': {handler: (passport.authenticate('google'), googleFetchLogin)},
  // $FlowFixMe
  'get /api/logout': {handler: (req, res) => {req.logout(); res.redirect('http://localhost:3001')}},
  'post /posts': {handler: createPost, middlewares: [auth]},
  'get /posts/:id': {handler: getPost},
  'get *': {handler: notFound},
  'get /api/current_user': {handler: getUser},
}
