#pragma strict

import UnityEngine.UI;

private var secretKey="woz"; // Edit this value and make sure it's the same as the one stored on the server
var userId : String = System.Environment.UserName;
var deviceId : String = System.Environment.MachineName;
var addScoreUrl : String = "http://104.236.235.232:8080/tetris/" + deviceId + "/"; //be sure to add a ? to your url

// REFERENCE STRING: http://104.236.235.232:8080/tetris/deviceId/userId?secret=woz&score=15309

function Start() {
  if (Score.score != 0) {
    postScore(Score.score);
  }
}

function postScore (score) {
    //This connects to a server side php script that will add the name and score to a MySQL DB.
    // Supply it with a string representing the players name and the players score.

    var highscore_url = addScoreUrl + WWW.EscapeURL(userId) + "?secret=" + secretKey + "&score=" + score;

    // Post the URL to the site and create a download object to get the result.
    var hs_post : WWW = WWW(highscore_url);
    yield hs_post; // Wait until the download is done
    if(hs_post.error) {
        print("There was an error posting the high score: " + hs_post.error);
    }
}