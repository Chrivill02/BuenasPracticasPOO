import postgres from "postgres";

const sql = postgres(process.env.SUPABASE_DB_URL as string, { ssl: "require" });

export default sql;
