import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersServices from './app/modules/users/users.services'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', async (req: Request, res: Response) => {
  await usersServices.createUser({
    id: '332',
    password: 'sonarBangla',
    role: 'student',
  })
  res.send('Hello World!')
})

export default app
