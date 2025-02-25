const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "art-quiz", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "art-quiz", "index.html"));
});

app.listen(process.env.PORT || 5060, () => console.log(`Server running... ${process.env.PORT}`));