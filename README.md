<div align="center">
  
# 🏛️ History Hub API

**The robust, fast, and scalable Node.js backend powering History Hub.**

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Redis](https://img.shields.io/badge/Redis-ioredis-DC382D?logo=redis&logoColor=white)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [API Reference](#-api-reference) • [Project Structure](#-project-structure)

</div>

---

## 📖 Overview

Welcome to the **History Hub API**! This repository contains the backend service built with Node.js and Express that serves historical event data, manages requests, and provides a blazing-fast caching layer using Redis.

Designed with clean architecture in mind, it provides a seamless API experience for the History Hub frontend applications.

## ✨ Features

- 🚀 **Express 5.x Ready**: Leveraging the latest Express framework for modern asynchronous routing.
- ⚡ **High Performance Caching**: Integrated `ioredis` for ultra-fast data retrieval and caching strategies.
- 🛡️ **Standardized Responses**: Utilizing custom `resify-express` middleware for consistent, predictable JSON responses and error handling.
- 🐳 **Dockerized**: Fully containerized environment with `Dockerfile` and `docker-compose.yml` for effortless local development and deployment.
- 🏗️ **Clean Architecture**: Well-structured `src` directory separating routes, controllers, services, and configurations.

## 🛠 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Caching/DB**: [Redis](https://redis.io/) via `ioredis`
- **Utilities**: `dotenv`, `cors`, `resify-express`
- **Containerization**: [Docker](https://www.docker.com/) & Docker Compose

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose (optional, but recommended for running Redis)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/historyhub-nodejs.git
   cd historyhub-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and configure your environment variables:
   ```env
   NODE_ENV=development
   APP_PORT=3000
   # Add your Redis and other configurations here
   ```

## 💻 Running the Project

### Using Node.js (Local)

Make sure your Redis server is running locally, then start the application:

```bash
npm start
# or for development (if nodemon is installed)
# npm run dev
```

### Using Docker (Recommended)

The easiest way to run the entire stack (Node app + Redis) is using Docker Compose:

```bash
# Build and start the containers in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f
```

The server will start running on `http://localhost:8080`.

## 📡 API Reference

### Health Check
Verify the status of the API.
- **URL**: `/health`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "ok": true
  }
  ```

### Events
Manage and retrieve historical events.
- **Base URL**: `/events`
- *More details available in the controllers/routes documentation.*

## 📂 Project Structure

```text
historyhub-nodejs/
├── .env                # Environment variables
├── Dockerfile          # Docker image configuration
├── docker-compose.yml  # Multi-container Docker setup
├── index.js            # Application entry point
├── package.json        # Project metadata and dependencies
└── src/                # Source code
    ├── config/         # Configuration files (Redis, DB, etc.)
    ├── controllers/    # Request handlers
    ├── routes/         # Express route definitions
    └── services/       # Business logic and data access
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License

This project is licensed under the **ISC License**.

---
<div align="center">
  <i>Built with ❤️ for history enthusiasts.</i>
</div>
