FriendFinder

FriendFinder is a full-stack app built for finding your ideal travel companion. Users are invited to take a short ten-question survey, and their scores are compared with the scores of every other user in the Wanderer database to find an ideal match (or matches, if two or more other users are evenly compared). Each match is then displayed for the user, with the match's picture, name, and their dream destination.

Table of Contents:
  
  >Dependencies
  
  >How It Works
  
  >Future Plans

Dependencies:

FriendFinder was built with just a trio of common dependencies:

  
  >Axios (to handle GET and POST requests on the front end)
  
  >Express (to handle request routing on the back end)
  
  >Path (to more easily work with file and directory paths on the back end)


How It Works
A user navigates to the site and clicks through to the survey. If they fill out the survey correctly, with all required inputs populated, then a POST request is made to the path /api/friends, adding the user to the FriendFinder API as a JSON object built like so:


{
    name: `Timothy Barlin`,
    
    profilePic: `https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?    ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80.jpg`,
    
    dreamDestination: `Holland`,
    
    answers: [3, 4, 3, 2, 1, 5, 4, 4, 5, 2]
}

Within the response function of the POST request, a second function is called that sends a GET request to api/friends/bff. The handling of this GET request on the back end is probably the most complex part of the entire app.

Essentially, what happens when the server receives a GET request to the api/friends/bff path is that it loops through each previously included user in the FriendFinder API, and within each loop, it runs a nested loop through each user's survey scores, comparing their scores with those of the most recently included user (the person who just posted their survey info).


The ideal match is found by tallying the total difference between the scores of each user and the scores of the most recent user, and the lowest difference between scores is the ideal match. If more than one previous user is tied for the lowest difference with the most recent user, then all previous users with tying lowest scores are returned in the GET response, which is returned as an array of JSON objects.

The information returned in the GET response is then used to populate a modal that pops up on the page, highlighting the users matched with the current user.

Future Plans:

1. Image uploading and better image validation

2. Profile pages with saved matches


