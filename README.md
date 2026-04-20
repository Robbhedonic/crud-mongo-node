# CRUD Mongo Node - Optional Homework

TypeScript + MongoDB (Mongoose) CRUD API for the optional homework assignment.

## Assignment Goal

Set up a MongoDB database and connect it to Node.js, then implement CRUD routes to manage users.

User fields:
- first_name
- last_name
- email

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- TypeScript
- Winston (logging)
- ESLint
- Prettier
- Nodemon

## Requirements

- Node.js 18+
- npm
- MongoDB Atlas account

## Environment Variables

Copy .env.example to .env and use your own MongoDB URI:

~~~env
PORT=3000
MONGO_URI=mongodb+srv://admin:pass@cluster0.xxxxx.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Cluster0
~~~

## Installation

~~~bash
npm install
~~~

## Scripts

~~~bash
# Start in development mode with nodemon + TypeScript
npm run dev

# Compile TypeScript
npm run build

# Run compiled app
npm start

# Lint
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format all files
npm run format

# Check formatting
npm run format:check
~~~

## API Endpoints

Base URL: http://localhost:3000

- GET /api/users
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

### Example JSON body (POST/PUT)

~~~json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com"
}
~~~

## Project Structure

~~~text
src/
  config/
    db.ts
  controllers/
    userController.ts
  models/
    User.ts
  routes/
    userRoutes.ts
  utils/
    logger.ts
  app.ts
  server.ts
~~~

## Suggested Submission

1. GitHub repository link.
2. Short description of your database and collection.
3. Evidence screenshots or video showing:
   - MongoDB Atlas database setup.
   - CRUD route testing in Postman/Insomnia.

## Remote Repository

https://github.com/Robbhedonic/crud-mongo-node.git
