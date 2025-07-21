# Product Catalog & Review Microservices

This project demonstrates a scalable and resilient microservice-based application using Node.js, Express, Docker, and NGINX.

## 🔗 GitHub Repository

[GitHub Link](https://github.com/vijaymehrotra/Coding-Challenge-Scalable-and-Resilient-Microservice)

---

## 🧠 Techniques Implemented

### ✅ Scalability

1. **Load Balancing**

   <img width="1920" height="974" alt="image" src="https://github.com/user-attachments/assets/ff18d42b-9ec7-40f8-b621-01437bd5e62b" />
   image for showing that every service used has 2 replicas in the docker-compose file and used nginx to balance the load equally.

   
   NGINX is configured to route incoming requests to different backend services. Although only one instance of each service is used now, the setup supports horizontal scaling by adding multiple service containers.

3. **Horizontal Scaling (Simulated)**
   
   Services are containerized using Docker. Docker Compose allows us to spin up multiple replicas to simulate horizontal scaling. NGINX can be extended to distribute traffic across them.

---

### ✅ Resilience

1. **Retry with Fallback**

   <img width="759" height="359" alt="image" src="https://github.com/user-attachments/assets/137bf681-3b99-40d6-89ee-43446bcdcedc" />

   Used Retry with fallback via custom logic.
   
   If `review-service` fails or times out, `product-service` retries the request 3 times. If it still fails, it uses predefined fallback data (`fallback.js`) to return a default response.

---

## 🐳 Dockerized Architecture

The application includes 2 main services and a reverse proxy:

<img width="1920" height="974" alt="image" src="https://github.com/user-attachments/assets/e1ea47b4-c7fc-4dea-bb5d-30b86992a56e" />
2 replicas of each service used and 1 replica of nginx for load balancing.

- **product-service** (Port 3001): Handles product-related APIs and integrates reviews from the review-service.
  
- **review-service** (Port 3002): Provides review data for products.
  
- **nginx** (Port 8081): Acts as a reverse proxy and load balancer.

### Docker Compose

Services are defined in `docker-compose.yml` and built via multi-container orchestration.

```bash

docker-compose up --build

```

4. **Access the application:**

   <img width="1920" height="974" alt="image" src="https://github.com/user-attachments/assets/6f3ef1a7-9755-48b6-b8ed-f9275c662e08" />
   access the application on http://localhost:8081/products/
   
Product API: http://localhost:8081/products/

Review API: http://localhost:8081/reviews/:productId


## 🧪 Failure & Recovery Simulation

1. **Simulated Failure:**
   
   Stop the review-service container:
   
```
   
docker-compose down -v

docker-compose up --build

```
   
   or comment it in docker-compose.yml and restart.

2. **Recovery :**

   The product service retries the request 3 times. If all fail, it uses the fallback response defined in fallback.js.

## 📦 Tech Stack

Node.js, Express

Docker & Docker Compose

NGINX
