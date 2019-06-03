const friends = require(`./data/friends`);



function apiRoutes(app) {

    app.post(`/api/friends`, (req, res) => {
        let userData=req.body.friend
        console.log(userData)
        let bestFriends = [];

        let bestFriendDiff = 11;

        for (let i = 0; i < friends.length - 1; i++) {

            let friendDiff = 0;
            for (let j = 0; j < friends[i].answers.length; j++) {

                if (friends[i].answers[j] > parseInt(userData.answers[j])) {

                    friendDiff += friends[i].answers[j] - parseInt(userData.answers[j]);

                } else if (friends[i].answers[j] < parseInt(userData.answers[j])) {

                    friendDiff += parseInt(userData.answers[j]) - friends[i].answers[j];

                }

            }

            
            if (bestFriends.length === 0) {
                console.log(friendDiff)
                if (friendDiff <= bestFriendDiff) {
                    console.log("hello")
                    bestFriends = [];
    
                    bestFriendDiff = friendDiff;
    
                    bestFriends.push(friends[i]);
                    break;
    
                }
            }

        }



        res.json(bestFriends);

    });



    app.get(`/api/friends/bff`, (req, res) => {
       
        console.log(userData);
        

    });



    app.post(`/api/friends`, (req, res) => {
        friends.push(req.body);

        res.json();

    });

}



module.exports = apiRoutes;