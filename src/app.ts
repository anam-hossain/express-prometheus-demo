import express from 'express';
import dotenv from 'dotenv';
import reservationRoutes from './routes/reservationRoutes';
import errorHandler from './utils/errorHandler';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/reservations', reservationRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Hotel reservation API!');
});

app.use(errorHandler);

export default app;
