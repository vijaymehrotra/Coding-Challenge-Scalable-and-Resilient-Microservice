function fallbackReviews(productId) {
  return [
    {
      user: "Anonymous",
      rating: 4,
      comment: "Fallback review for " + productId,
    },
  ];
}

export default fallbackReviews;
