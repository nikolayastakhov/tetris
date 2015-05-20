#pragma strict
import UnityEngine.UI;
public var StartMenu : Canvas;
public var QuitMenu : Canvas;
public var PauseMenu : Canvas;
public var StartB : Button;
public var CloseB : Button;

function Start () {
	QuitMenu = QuitMenu.GetComponent.<Canvas>();
    StartB = GetComponent.<Button> ();
    CloseB = GetComponent.<Button> ();
    StartMenu.enabled = true;
    QuitMenu.enabled = false;
}
function ExitPress (){
    StartMenu.enabled = false;
    QuitMenu.enabled = true;
}

function NoPress (){
    QuitMenu.enabled = false;
    StartMenu.enabled = true;
}

public function ExitGame (){
    Application.Quit(); 
}

public function StartLevel (){
        Application.LoadLevel (1); //this will load our first level from our build settings. "1" is the second scene in our game
}