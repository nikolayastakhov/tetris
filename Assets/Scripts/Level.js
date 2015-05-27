#pragma strict

static var level : int;
var levelText : UnityEngine.UI.Text;
var levelSpaces : Array = ["     ", "    ", "   ", "  ", " "];


function Awake () {
  levelText = GetComponent.<UnityEngine.UI.Text>();
  Group.speed = 1;
  level = 1;
}

function Update () {
  levelText.text = levelSpaces[level.ToString().Length - 1] + level.ToString();
}