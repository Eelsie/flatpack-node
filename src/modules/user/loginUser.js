// @flow

import passport from 'passport'

export default () => {
  try {
    passport.authenticate('google'),
  (req, res) => {
    res.redirect('http://localhost:3000/home')
  }
  } catch(e) {
    console.log(e)
  }
}
