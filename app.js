const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

//db
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected, Master!"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  if (err) console.log(`Error connecting to MongoDB ${err.message}`);
});

//bring in the routes
const postRoutes = require("./routes/post");
const articleRoutes = require("./routes/article");
const eMetaTagRoutes = require("./routes/eMetaTag");
const ePostTypeRoutes = require("./routes/ePostType");
const eStatusRoutes = require("./routes/eStatus");
const eUserTypeRoutes = require("./routes/eUserType");
const imgRoutes = require("./routes/img");
const seriesRoutes = require("./routes/series");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use("/", postRoutes);
app.use("/", articleRoutes);
app.use("/", eMetaTagRoutes);
app.use("/", ePostTypeRoutes);
app.use("/", eStatusRoutes);
app.use("/", eUserTypeRoutes);
app.use("/", imgRoutes);
app.use("/", seriesRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Master, your node.js app is listening on port: ${port}`)
);
