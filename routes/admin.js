import authorization from "../middleware/authorization"
import express from express
import pool from "../db/db"
const router = express.Router()

export default router.get('/', authorization, async(req, res) => {
    try {
        res.json(req.user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error from admin get route')
    }
})

