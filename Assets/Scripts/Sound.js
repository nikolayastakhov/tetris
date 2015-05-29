#pragma strict

static var muted : boolean = false;
var moveClip : AudioClip;

function Update () {
  if (Input.GetKeyDown(KeyCode.M)) {
    mute();
  }

  if (Input.GetKeyDown(KeyCode.W) ||
      Input.GetKeyDown(KeyCode.S) ||
      Input.GetKeyDown(KeyCode.A) ||
      Input.GetKeyDown(KeyCode.D) ||
      Input.GetKeyDown(KeyCode.UpArrow) ||
      Input.GetKeyDown(KeyCode.LeftArrow) ||
      Input.GetKeyDown(KeyCode.DownArrow) ||
      Input.GetKeyDown(KeyCode.RightArrow) ||
      Input.GetKeyDown(KeyCode.Space)) {
    GetComponent.<AudioSource>().PlayOneShot(moveClip);
  }
}

function mute () {
  if (!muted) {
    AudioListener.pause = true;
    muted = true;
  } else {
    AudioListener.pause = false;
    muted = false;
  }
}