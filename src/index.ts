import express from 'express'

import {randomName} from './user'


const app = express()
const port = process.env


app.get('/users', async (_, res) => {
  const users = await randomName
  res.send(JSON.stringify(users))
})
 app.listen(port, () => {
  console.log('server up and running on port ' + port);
})
