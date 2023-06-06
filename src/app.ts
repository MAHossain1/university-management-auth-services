import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandlers'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application router
app.use('/api/v1/users', UserRoutes)

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'ore baba khaiche erroru')
//   // next('Babare khaice je error mairtache')
// })

// global error handler
app.use(globalErrorHandler)

export default app
