#pragma strict

import UnityEngine.UI;

static var pauseMenu : Canvas;
static var contB : Button;
static var mainB : Button;

function Awake () {
  pauseMenu = GetComponent.<Canvas>();
  contB = GetComponent.<Button>();
  mainB = GetComponent.<Button>();
}

static function pause () {
  pauseMenu.enabled = true;
}

static function resume () {
  pauseMenu.enabled = false;
}

function goToMain () {
  Application.LoadLevel (0);
  Group.resume();
}

function continueGame () {
  pauseMenu.enabled = false;
  Group.resume();
}
