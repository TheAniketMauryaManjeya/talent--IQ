import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV= {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    MODE_ENV: process.env.MODE_ENV,
}