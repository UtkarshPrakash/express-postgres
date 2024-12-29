const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index", {
        title: "Postgres Tutorial",
        header: "Users List",
        content: ['Batman', 'Superman', 'Flash'],
    });
});

router.get("/new", (req, res) => {
    res.render("new", {title: "Add new user"});
});

router.post("/new", (req, res) => {
    // push the form data to DB
    console.log("Username to be saved:", req.body.username);
    res.redirect("/");
})

module.exports = router;