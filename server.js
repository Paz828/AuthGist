import express from "express";
import { userRouter } from "./routes/jwtAuth.js";
import { adminRouter } from "./routes/admin.js";

const app = express();
app.use(express.json());

const PORT = 3001;

app.use("/api/auth", userRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
