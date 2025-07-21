import { Router } from "express";
const router = Router();
import reviews  from "../data/reviews.js";

router.get("/:productId", (req, res) => {
  const delay = Math.random() < 0.3 ? 4000 : 500; // simulate 30% chance of failure
  setTimeout(() => {
    if (delay > 3000) return res.status(500).send("Service timeout");
    const data = reviews[req.params.productId] || [];
    res.json(data);
  }, delay);
});

router.post('/:productId', (req, res) => {
  const { productId } = req.params;
  const { user, rating, comment } = req.body;
  if (!user || !rating || !comment) return res.status(400).send('All fields required');

  const review = { user, rating, comment };
  if (!reviews[productId]) reviews[productId] = [];
  reviews[productId].push(review);
  res.status(201).json(review);
});

export default router;
