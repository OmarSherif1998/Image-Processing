import express from "express";
import { route } from "./routes/app";

const app = express();
const port = 3000;

app.use("/api", route);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

export default app;
