import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';
// import ApiError from './errors/ApiError'
const app: Application = express();

app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application router
// app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1', routes);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

// global error handler
app.use(globalErrorHandler);

export default app;
