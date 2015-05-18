#pragma strict

static var score : int;
var scoreText : UnityEngine.UI.Text;
var scoreSpaces : Array = ["     ", "    ", "   ", "  ", " "];

function Awake () {
  scoreText = GetComponent.<UnityEngine.UI.Text>();
}

function Update () {
  scoreText.text = scoreSpaces[score.ToString().Length - 1] + score.ToString();
}