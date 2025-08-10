// Import the express module to create a router for handling HTTP requests
import express from "express";

// Import the loginUser function from the authController file
// This function is responsible for handling the login logic
import { loginUser } from "../controllers/authController";

// Create a new Express router instance
const router = express.Router();

// Define a POST route at the path "/login"
// When a POST request is made to /auth/login, the loginUser controller will be executed
router.post("/login", loginUser); // POST /auth/login

// Export the router so it can be used in other parts of the application (e.g., app.js)
export default router;
