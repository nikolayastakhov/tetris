#pragma strict
import UnityEngine.UI;
public var startMenu : Canvas;
public var quitMenu : Canvas;
public var scoreMenu : Canvas;
public var startB : Button;
public var closeB : Button;

function Start () {
	quitMenu = quitMenu.GetComponent.<Canvas>();
  startB = GetComponent.<Button>();
  closeB = GetComponent.<Button>();
  startMenu.enabled = true;
  quitMenu.enabled = false;
  scoreMenu.enabled = false;
}
function ExitPress () {
  startMenu.enabled = false;
  quitMenu.enabled = true;
  scoreMenu.enabled = false;
}

function ScorePress () {
  quitMenu.enabled = false;
  startMenu.enabled = false;
  scoreMenu.enabled = true;
}

function NoPress () {
  quitMenu.enabled = false;
  startMenu.enabled = true;
  scoreMenu.enabled = false;
}

public function ExitGame () {
  Application.Quit();
}

public function StartLevel () {
  Score.score = 0;
  Level.level = 1;
  Application.LoadLevel(1); //this will load our first level from our build settings. "1" is the second scene in our game
}