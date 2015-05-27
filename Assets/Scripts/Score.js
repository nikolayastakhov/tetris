#pragma strict

import UnityEngine.UI;

static var score : int;
var scoreText : Text;
var scoreSpaces : Array = ["     ", "    ", "   ", "  ", " "];

function Awake () {
  scoreText = GetComponent.<Text>();
}

function Update () {
  scoreText.text = scoreSpaces[score.ToString().Length - 1] + score.ToString();
}