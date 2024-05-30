import express, { Express } from 'express';
import promBundle from 'express-prom-bundle';

const app = express();

export const registerMetricsMiddleware = (app: Express, metricsApp: Express) => {
  const metricsMiddleware = promBundle({ 
    includeMethod: true,
    autoregister: false,
    metricsApp,
  });
  
  app.use(metricsMiddleware);
};

export default app;

