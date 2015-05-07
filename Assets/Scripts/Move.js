#pragma strict

function Update () {
  if (Input.GetKeyDown(KeyCode.C)) {
    FindObjectOfType(Spawner).spawnNext();
  }

  else if (Input.GetKeyDown(KeyCode.D)) {
    FindObjectOfType(Spawner).destroyLast();
  }

  else if (Input.GetKeyDown(KeyCode.R)) {
    FindObjectOfType(Spawner).rotate();
  }

  else if (Input.GetKeyDown(KeyCode.LeftArrow)) {
    FindObjectOfType(Spawner).moveLeft();
  }

  else if (Input.GetKeyDown(KeyCode.RightArrow)) {
    FindObjectOfType(Spawner).moveRight();
  }

  else if (Input.GetKeyDown(KeyCode.DownArrow)) {
    FindObjectOfType(Spawner).moveDown();
  }

  else if (Input.GetKeyDown(KeyCode.UpArrow)) {
    FindObjectOfType(Spawner).moveUp();
  }
}