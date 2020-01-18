var friendsData = require("../app/data/friends")

module.exports = function(app) {


app.get("/api/friends", (req, res) => {
    res.json(friendsData)
});


app.post("/api/friends", (req, res) => {

    //recieve newFriend object via ajax post
    //survey compatability logic 
    //send most compatbile friend object as response


});


}