#pragma strict

static var level : int;
var levelText : UnityEngine.UI.Text;
var levelSpaces : Array = ["     ", "    ", "   ", "  ", " "];


function Awake () {
  levelText = GetComponent.<UnityEngine.UI.Text>();
  Group.speed = 1;
}

function Update () {
  level = Mathf.Ceil(Score.score / 1000) + 1;
  levelText.text = levelSpaces[level.ToString().Length - 1] + level.ToString();
}