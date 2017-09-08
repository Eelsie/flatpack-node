// @flow

import mongoose from 'mongoose'
import {mongoURI} from '../keys'


export default () => {
  mongoose.Promise = Promise
  mongoose.connect(process.env.DB || mongoURI)
  mongoose.connection.on('error', () => console.log('MongoDB connection error'))
}
