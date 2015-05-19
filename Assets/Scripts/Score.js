<<<<<<< HEAD
﻿static var score : int;        // The player's score.
private var text : Text;       // Reference to the Text component.


function Awake ()
{
    text = GetComponent (Text);
    score = 0;
}


function Update ()
{
    text.text = " " + score;
=======
﻿#pragma strict

static var score : int;
var scoreText : UnityEngine.UI.Text;
var scoreSpaces : Array = ["     ", "    ", "   ", "  ", " "];

function Awake () {
  scoreText = GetComponent.<UnityEngine.UI.Text>();
}

function Update () {
  scoreText.text = scoreSpaces[score.ToString().Length - 1] + score.ToString();
>>>>>>> origin/develop
}