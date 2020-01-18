var friendsData = require("../app/data/friends")

module.exports = function(app) {


app.get("/api/friends", (req, res) => {
    res.json(friendsData)
})





}