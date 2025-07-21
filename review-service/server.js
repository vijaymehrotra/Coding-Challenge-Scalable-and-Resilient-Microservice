import express, { json } from 'express';
const app = express();
import reviewRoutes from './routes/reviewRoutes.js';

app.use(json());
app.use('/reviews', reviewRoutes);

app.listen(3002, () => {
  console.log('Review Service running on port 3002');
});
