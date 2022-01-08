// import libs
import "dotenv/config";
import express from "express";

// import files
import * as db from "./db/connect";
import tasks from "./routes/tasks";

// constants
const app: express.Application = express();
const port: any = process.env.PORT || 3000;

// load middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/", tasks);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

// start db
db.init(process.env.DB_URL as string);

// start server
app.listen(port, () => console.log("Listening on port", port));

