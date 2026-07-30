const express = require("express");
const cors = require("cors");

require("./db");


const launchRoutes = require("./routes/launches");

console.log("launchRoutes:", launchRoutes);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/launches", launchRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Adidas Launch Management API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});