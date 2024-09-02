import { Console } from 'console';
import express from 'express'

//define app
const app = express()

//listening to port

const PORT = process.env.PORT || 8999;

app.listen('PORT', () => {
  Console.log(`Server is listening to ${PORT}`)
})