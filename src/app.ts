// imports
import "dotenv/config";
import express from "express";
import * as db from "./db/connect";
import tasks from "./routes/tasksRouter";

// constants
const app: express.Application = express();
const port: any = process.env.PORT || 3000;

// load middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/", tasks);

// start server
app.listen(port, () => console.log("Listening on port", port));

// start db
db.init(process.env.DB_URI as string);
