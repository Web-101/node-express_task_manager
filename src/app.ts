// import libs
import express from "express";

// import routes
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

// start server
app.listen(port, () => console.log("Listening on port", port));
