import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "mcsp_db",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "jwt",
});

export default pool;
