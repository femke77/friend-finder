var friendsData = require("../app/data/friends")

module.exports = function(app) {


app.get("/api/friends", (req, res) => {
    res.json(friendsData)
});


app.post("/api/friends", (req, res) => {
    
    var matchedFriend;

    //get the user's score total
    var scoreTotal = req.body.scores.reduce((a,  b) => parseInt(a) + parseInt(b), 0);
    console.log(`scoreTotal: ${scoreTotal}`);

    //the max difference between scores is 50-10 = 40
    var diff = 40;

    //get score totals for each friend in the database and save if abs diff is less
    friendsData.forEach(friend => {
        var tempSum = friend.scores.reduce((a,b) => parseInt(a) + parseInt(b), 0)
        if (Math.abs(tempSum-scoreTotal) < diff){
            diff = Math.abs(tempSum-scoreTotal);
            matchedFriend = friend;      
        }
    });
    
    console.log(matchedFriend)

    //push last so we don't compare to ourself during above loop
    //friendsData.push(req.body)

    //send the matched friend 
    res.json(matchedFriend);
});


}



