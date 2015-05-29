#pragma strict

import UnityEngine.UI;

var highscoreUrl : String = "http://104.236.235.232:8080/tetris/";

// REFERENCE STRING: http://104.236.235.232:8080/tetris/deviceId/userId?secret=woz&score=15309

function Start() {
  getScores();
}

// Get the scores from the MySQL DB to display in a GUIText.
function getScores() {
    gameObject.GetComponent.<Text>().text = "Loading Scores";
    var hs_get : WWW = WWW(highscoreUrl);
    yield hs_get;

    if(hs_get.error) {
      print("There was an error getting the high score: " + hs_get.error);
    } else {
        gameObject.GetComponent.<Text>().text = hs_get.text; // this is a GUIText that will display the scores in game.
    }
}