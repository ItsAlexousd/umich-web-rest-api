# University of Michigan-Dearborn: Web Technology - RESTful API

RESTful API with Node.js, Express and MongoDB.

## Prerequisites

Before running the project, ensure that you have the following installed:

- Node.js
- MongoDB

## Getting Started

To get started, follow the instructions below:

1. Install the dependencies:

```bash
npm install
```

2. Set up the environment variables:

Create a new file named `.env` in the project root directory and add the following variables:

```
NODE_ENV=development
PORT=5000
MONGODB_URL=mongodb://your-mongodb-url
JWT_SECRET=your-jwt-secret
```

Replace `your-mongodb-url` with the URL of your MongoDB database and `your-jwt-secret` with a secret key for JWT token generation.

3. Start the server:

```bash
npm start
```

The server will start running on __http://localhost:5000__.

## API Endpoints

The following API endpoints are available:

- `GET /api/v1/users` - Retrieve all users (requires authentication).
- `POST /api/v1/users/signUp` - Sign up a new user.
- `POST /api/v1/users/signIn` - Sign in an existing user.

## Project Structure

The project follows a specific structure:

- `index.js` - Entry point of the application.
- `app.js` - Configures the Express application and sets up middleware.
- `api` - Defines the API routes.
- `config/db.js` - Connects to the MongoDB database.
- `controllers` - Contains the logic for handling requests and responses.
- `middlewares` - Contains custom middleware functions.
- `models` - Defines the Mongoose schema for the user model.

## Technologies Used

The project uses the following technologies and libraries:

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js
