// imports
import "dotenv/config";
import express from "express";
import path from "path";
import * as db from "./db/connect";
import tasks from "./routes/tasksRouter";

// constants
const app: express.Application = express();
const port: any = process.env.PORT || 3000;
const publicPath: string = path.join(__dirname, "./public");

// load middlewares
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/", tasks);

// start server
app.listen(port, () => console.log("Listening on port", port));

// start db
db.init(process.env.DB_URI as string);
