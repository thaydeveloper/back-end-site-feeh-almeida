const express = require("express");
const routes = require("./routes");
const conn = require("./db/connect");
const cors = require("cors");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
conn();

app.use(routes);

/* app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
 */

app.listen(3000);

//LgOZV8TH0UZIoGTZ
