import express from 'express';
import client from 'prom-client';

const app = express();

const metricPort = process.env.METRIC_PORT || 9100;

export const startMetricServer = () => {
  const collectDefaultMetrics = client.collectDefaultMetrics;

  collectDefaultMetrics();

  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);

    return res.send(await client.register.metrics());
  });

  app.listen(metricPort, () => {
    console.log(`Metric server is running on port ${metricPort}`);
  });
};

