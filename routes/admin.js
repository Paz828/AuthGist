import authorization from "../middleware/authorization.js";
import express from "express";
import pool from "../db/db.js";
const router = express.Router();

router.get("/home", authorization, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error from admin get route");
  }
});

export { router as adminRouter };
