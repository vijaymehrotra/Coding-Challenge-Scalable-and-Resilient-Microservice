import { Router } from "express";
const router = Router();
import getReviewsWithRetry from "../services/reviewClient.js";

const products = [
  { id: "prod-1", name: "iPhone 14", price: 999 },
  { id: "prod-2", name: "Pixel 8", price: 799 },
];

router.get("/", async (req, res) => {
  const enrichedProducts = await Promise.all(
    products.map(async (product) => {
      const reviews = await getReviewsWithRetry(product.id);
      return { ...product, reviews };
    })
  );
  res.json(enrichedProducts);
});

router.post("/", (req, res) => {
  console.log("Adding new product:", req.body);
  const {id, name, price } = req.body;
  if (!name || !id || !price)
    return res.status(400).send("Name and price are required");

  const product = { id, name, price };
  products.push(product);
  res.status(201).json(product);
});

export default router;
