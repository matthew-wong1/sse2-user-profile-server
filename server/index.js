const express = require("express");
const cors = require("cors");

// FOR DEVELOPMENT PURPOSES
const IP_ADDRESS = '127.0.0.1';
const PORT = process.env.PORT || 3001;

const app = express();

// FOR DEVELOPMENT PURPOSES
app.use(cors());

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Get user profile information
app.get("/api/user", (req, res) => {
  // Authenticate JWT (another microservice?)

  // If authentication fails, throw error (show error page with correct http status)

  // Check cache. If has user details, return 

  // Else, execute SQL queries 

  // Cache 

  // Return JSON of user 

});

// User signup 
app.post('/api/signup', (req, res) => {
  // Form validation 

  // Update database 

  // Re-route to signin? 

});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server listening on ${IP_ADDRESS}:${PORT}`);
});