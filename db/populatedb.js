const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES
    ('Spicy'),
    ('Senti'),
    ('Sona');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://molecule:packmybox@localhost:5432/users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();