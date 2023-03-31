import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

dotenv.config();
connectToDatabase();
const app = express();
// our routes
import productRoutes from "./routes/productRoutes.js";

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server runs at port ${PORT}.`);
});
