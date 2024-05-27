const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");

const app = express();

const { cors } = require("./middlewares/cors");
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/api");

connectToDatabase();

app.use(cors, bodyParser.json(), apiRouter, express.static(path.join(__dirname, "public")), mainRoute);

app.listen(3000, () => {
	console.log(`App is listened on PORT: ${3000}`);
});
