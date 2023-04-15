let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");

let express = require("express");

require('dotenv').config();

let geoJsonRouter = require("./routes/geojson-controller");
let wmsRouter = require("./routes/wms-controller");

let mongoDbController = require("./utils/mongo-db-connector")

let app = express();

mongoDbController.init()
    .then(() => {
      console.log("(Init MongoDB) Database has been connected.");
    })
    .catch((err) => {
        console.log(`(Init MongoDB) There was an error connecting to the database: ${err}`)
    });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use("/api/v1/geojson", geoJsonRouter);
app.use("/api/v1/wms", wmsRouter);

module.exports = app;
