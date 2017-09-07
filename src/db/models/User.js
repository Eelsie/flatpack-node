// @flow

import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  googleId: String,
  displayName: String,
  name: Object,
  emails: Array,
  image: Object,
})

export default mongoose.model('User', UserSchema)
