const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function getSpecificUsers(searchTerm) {
    await pool.query(`
        SELECT * FROM usernames
        WHERE username ilike ($1);
    `, [`%${searchTerm}%`])
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
    getAllUsernames,
    getSpecificUsers,
    insertUsername
};