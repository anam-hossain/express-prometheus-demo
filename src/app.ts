import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import reservationRoutes from './routes/reservationRoutes';
import errorHandler from './utils/errorHandler';
import responseTime from 'response-time';
import { apiResponseTimeMetric } from './services/metricService';

dotenv.config();

const app = express();
app.use(express.json());

const apiResponseTimeMetricMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  responseTime((req, res, time) => {
    apiResponseTimeMetric(req as Request, res as Response, time);
  })(req, res, next);
};

app.use('/reservations', reservationRoutes);

app.use(apiResponseTimeMetricMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to Hotel reservation API!');
});

app.use(errorHandler);

export default app;
