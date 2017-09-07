// @flow

import createPost from '$modules/post/createPost'
import passport from 'passport'
import getPost from '$modules/post/getPost'
import notFound from '$modules/errors/404'

import {auth} from '$modules/post/middlewares'

export default {
  'get /auth/google': {handler: passport.authenticate('google', {scope: ['profile', 'email']})},
  'get /auth/google/callback': {handler: passport.authenticate('google')},
  'post /posts': {handler: createPost, middlewares: [auth]},
  'get /posts/:id': {handler: getPost},
  'get *': {handler: notFound},
}
