import express from 'express';
import dotenv from 'dotenv';
import reservationRoutes from './routes/reservationRoutes';
import errorHandler from './utils/errorHandler';
import metricsApp, { registerMetricsMiddleware } from './metrics';

dotenv.config();

const app = express();
app.use(express.json());

registerMetricsMiddleware(app, metricsApp);

app.use(reservationRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Hotel reservation API!');
});

app.use(errorHandler);

export default app;
