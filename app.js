const express = require('express');

const app = express();

const port = 80;

app.use(express.static("public"));

app.listen(port, () => {
    console.log("app started on port: " + port);
})

app.get("/", (req, res) => {
    res.render("index.html");
})