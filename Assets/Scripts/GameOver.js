#pragma strict
import UnityEngine.UI;
public var GameOverCan : Canvas;
public var MainMenu : Button;

function Start () {
	GameOverCan = GameOverCan.GetComponent.<Canvas>();
  MainMenu = GetComponent.<Button>();
}

public function StartLevel () {
  Application.LoadLevel (0); //this will load our first level from our build settings. "1" is the second scene in our game
}