const express = require("express")
const router = express.Router();


router.get("/user", (req, res) => {
    res.send("Inside the user router");
    console.log("done logged in")

})



module.exports = router;