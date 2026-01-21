# Intro to Backend Web Development

A robust backend API built with Node.js, Express.js, and MongoDB, designed to demonstrate core backend concepts including user authentication and CRUD operations for posts.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## 📋 Features

- **User Authentication**: Secure registration, login, and logout functionalities using JWT (implied by typical setups) and bcrypt for password hashing.
- **Post Management**: Create, read, update, and delete (CRUD) posts.
- **MVC Architecture**: Clean code structure using Models, Views (Controllers), and Routes.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
- **Authentication**: [bcrypt](https://www.npmjs.com/package/bcrypt) (Hashing)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Development**: [nodemon](https://nodemon.io/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js installed on your machine.
- MongoDB instance (local or Atlas) ready.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Suprimbishwakarma/Into-to-backend-web-development.git
   cd Into-to-backend-web-development
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=8000
   DATABASE_URI=your_mongodb_connection_string
   ```

4. **Run the Server**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:8000`.

## 📡 API Endpoints

### User Routes (`/api/v1/users`)

| Method | Endpoint    | Description          |
| :----- | :---------- | :------------------- |
| POST   | `/register` | Register a new user  |
| POST   | `/login`    | Login an existing user|
| POST   | `/logout`   | Logout the user      |

### Post Routes (`/api/v1/posts`)

| Method | Endpoint       | Description            |
| :----- | :------------- | :--------------------- |
| POST   | `/create`      | Create a new post      |
| GET    | `/getPosts`    | Retrieve all posts     |
| PATCH  | `/update/:id`  | Update a specific post |
| DELETE | `/delete/:id`  | Delete a specific post |

## 📂 Project Structure

```
src/
├── config/         # Database configuration
├── controllers/    # Request handlers (User, Post)
├── models/         # Mongoose models (User, Post)
├── routes/         # API Route definitions
├── app.js          # Express app setup
└── index.js        # Entry point
```

## 📄 License

This project is licensed under the [ISC License](LICENSE).
