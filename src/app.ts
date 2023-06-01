import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersServices from './app/modules/users/users.services'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application router
app.use('/api/v1/users', usersRouter)

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
