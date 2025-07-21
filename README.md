# Product Catalog & Review Microservices

This project demonstrates a scalable and resilient microservice-based application using Node.js, Express, and NGINX.

## 🔗 GitHub Repository

[GitHub Link](https://github.com/vijaymehrotra/Coding-Challenge-Scalable-and-Resilient-Microservice)

## 🧠 Techniques Implemented

### ✅ Scalability

1. **Load Balancing**:  
   NGINX is configured to route requests to services. Although we use one instance for each service here, the setup supports multiple instances for horizontal scaling.

2. **Horizontal Scaling (Mocked)**:  
   Simulated by containerizing services using Docker Compose. You can spin up multiple instances of `product-service` and `review-service` to simulate scaling.

### ✅ Resilience

1. **Retry with Fallback**:  
   When the review service fails or times out, the product service retries 3 times before falling back to static/dummy data via a fallback method.

---

## 🛠️ Setup Instructions

1. **Clone the repo**:
   ```bash
   git clone ttps://github.com/vijaymehrotra/Coding-Challenge-Scalable-and-Resilient-Microservice
   cd Coding-Challenge-Scalable-and-Resilient-Microservice
   ```

