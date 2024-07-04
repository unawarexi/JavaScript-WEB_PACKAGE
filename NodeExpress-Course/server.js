const express = require('express');
const app = express();
require('dotenv').config();

// FIRST USE OF METHODS
app.get("/", (req, res) => {
    res.send("hello world")
})



// SPECIFIYING ROUTEES FOR ALL ROUTE PAGES
const UserRouter = require("./Routes/User")
app.use("/api", UserRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}` )
}) 

