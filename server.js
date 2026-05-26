require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const productRoutes =
  require("./routes/productRoutes");

  const uploadRoutes =
require("./routes/uploadRoutes");



const orderRoutes =
  require("./routes/orderRoutes");

  const dashboardRoutes =
  require("./routes/dashboardRoutes");

  const reviewRoutes =
  require(
    "./routes/reviewRoutes"
  );

  const settingsRoutes =
  require(
    "./routes/settingsRoutes"
  );

  const contactRoutes =
  require(
    "./routes/contactRoutes"
  );
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running...");
});

const PORT =
  process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});

app.use(express.json());

app.use(
  "/api/products",
  productRoutes
);
app.use(
  "/api/orders",
  orderRoutes
);
app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/reviews",
  reviewRoutes
);

app.use(
  "/api/settings",
  settingsRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);
