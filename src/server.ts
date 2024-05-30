import app from './app';
import metricsApp from './metrics';

const appPort = process.env.PORT || 3000;
const metricPort = process.env.METRIC_PORT || 9100;

metricsApp.listen(metricPort, () => {
  console.log(`Metric server is running on port ${metricPort}`);
});

app.listen(appPort, () => {
  console.log(`App Server is running on port ${appPort}`);
});
