const friendsList = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        // res.json(path.join(__dirname, './app/data/friends.js'));
        res.json(friendsList)
    })

    app.post('/api/friends', function(req, res){
        var userScore = req.body.scores;
        // './app/data/friends.js'.push(user_input);
        var differenceArray = [];
        friendsList.forEach(function(friend){
            var scoreDifference = 0;
            for(var i=0; i<userScore.length; i++){
                scoreDifference += Math.abs(userScore[i]-friend.scores[i]);
            }
            var thisFriendDiff = [scoreDifference, friend.name, friend.photo];
            differenceArray.push(thisFriendDiff);
        })
        var leastDiff = 41;
        var indexBestMatch;
        for(var j=0; j<differenceArray.length; j++){
            if(differenceArray[j][0] < leastDiff){
                leastDiff = differenceArray[j][0];
                indexBestMatch = j;
            }
        }
        friendsList.push(req.body);
        res.json({
            name: differenceArray[indexBestMatch][1],
            photo: differenceArray[indexBestMatch][2]
        })
    })
}


