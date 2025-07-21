import express, { json } from "express";
const app = express();
import productRoutes from './routes/productRoutes.js';

app.use(json());
app.use("/products", productRoutes);

app.listen(3001, () => {
  console.log("Product Service running on port 3001");
});
