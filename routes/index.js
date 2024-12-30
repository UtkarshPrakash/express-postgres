const express = require("express");
const router = express.Router();
const db = require("../db/queries");

router.get("/", async (req, res) => {
    const searchTerm = req.query.search;
    if (searchTerm) {
        console.log("Searched for ", searchTerm);
        // have those usernames only
        const usernames = await db.getSpecificUsers(searchTerm);
    } else {
        // have all the usernames
        console.log("Getting all usernames");
        const usernames = await db.getAllUsernames();
    }
    const names = usernames.map(user => user.username);
    res.render("index", {
        title: "Postgres Tutorial",
        header: "Users List",
        content: names,
    });
});

router.get("/new", (req, res) => {
    res.render("new", {title: "Add new user"});
});

router.post("/new", async (req, res) => {
    // push the form data to DB
    const { username } = req.body;
    await db.insertUsername(username);
    console.log("Username to be saved:", username);
    res.redirect("/");
})

module.exports = router;