#pragma strict

function Update () {
  if (Input.GetKeyDown(KeyCode.DownArrow)) {
    FindObjectOfType(Spawner).spawnNext();
  }
}