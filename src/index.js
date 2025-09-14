const express = require("express");
const cors = require("cors");
const setRoutes = require("./routes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Register routes
setRoutes(app);;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});