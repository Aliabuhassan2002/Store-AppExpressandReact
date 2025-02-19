const express = require("express");
const cors = require("cors");
const axios = require("axios");

//express js server
const app = express();
const PORT = 9000;
app.use(cors());
app.use(express.json());

const url = "https://fakestoreapi.com/products";

app.get("/products", async (req, res) => {
  const response = await axios.get(url);
  if (response.data) {
    res.status(200).json(response.data); //لعرضهم على الصفحة في حالة نجاح جلب البيانات
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
