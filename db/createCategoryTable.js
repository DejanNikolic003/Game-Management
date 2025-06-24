import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    banner_url VARCHAR (255)
);
`;

const main = async () => {
    console.log("Seeding...");

    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("Done");
};

main();