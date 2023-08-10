import express from "express";
import router from "./routes/jwtAuth.js";

const app = express();
app.use(express.json());

const PORT = 3001;

app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
