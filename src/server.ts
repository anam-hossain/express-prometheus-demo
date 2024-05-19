import app from './app';
import { startMetricServer } from './metrics';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  startMetricServer();
});
