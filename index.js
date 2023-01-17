const express = require("express");
const {
  default: mongoose
} = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const saveProductRouter = require("./routes/savedItemRoutes");

dotenv.config();

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());



app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/save", saveProductRouter);

app.listen(port, () => console.log(`server is running on port ${port}`))