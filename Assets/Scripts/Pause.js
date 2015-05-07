#pragma strict
import UnityEngine.UI;
public var PauseMenu : Canvas;
public var Resume : Button;
public var MainMenu : Button;


function Start () {
	PauseMenu = PauseMenu.GetComponent.<Canvas>();
    PauseMenu.enabled = false;
}
function Resumefun (){
    PauseMenu.enabled = false;
}
function Update () {
	   if (Input.GetKeyDown(KeyCode.Escape))
    {
        Pause();
    }
}

public function Pause()
{
    PauseMenu.enabled = !PauseMenu.enabled;
}

public function GoToMainMenu (){
        Application.LoadLevel (0); //this will load our first level from our build settings. "1" is the second scene in our game
}