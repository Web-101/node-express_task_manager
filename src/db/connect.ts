// imports
import mongoose from "mongoose";

// connect to mongoDB
export function init(uri: string) {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
}
