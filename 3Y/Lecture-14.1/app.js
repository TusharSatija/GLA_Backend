const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "bmndbgfmndbgnm",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true for HTTPS
}));

app.get("/", (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views++;
    }
    res.send(`Views: ${req.session.views}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
