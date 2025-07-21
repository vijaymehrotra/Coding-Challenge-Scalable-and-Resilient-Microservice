import get from "axios";
import fallbackReviews from "../utils/fallback.js";

async function getReviewsWithRetry(productId, retries = 3) {
  const url = `http://review-service:3002/reviews/${productId}`;
  while (retries-- > 0) {
    try {
      const response = await get(url, { timeout: 2000 });
      return response.data;
    } catch (err) {
      console.log(`Retrying ${productId}, attempts left: ${retries}`);
    }
  }
  return fallbackReviews(productId);
}

export default getReviewsWithRetry;
