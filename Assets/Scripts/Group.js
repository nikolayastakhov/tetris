#pragma strict

static var speed : float = 1;
static var pauseTime : float;
static var paused : boolean;

var speedSaved : float;
var lastFall : float = 0;

function Awake () {
  paused = false;
}

function Start () {
  if (!isValidGridPos()) {
    Application.LoadLevel(2);
  }
}

function Update () {



  if (!paused) {
    if (Input.GetKeyDown(KeyCode.LeftArrow) || Input.GetKeyDown(KeyCode.A)) {
      moveLeft();
    } else if (Input.GetKeyDown(KeyCode.RightArrow) || Input.GetKeyDown(KeyCode.D)) {
      moveRight();
    } else if (Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S) || Time.time - lastFall >= speed) {
      moveDown();
    } else if (Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W)) {
      rotate();
    } else if (Input.GetKeyDown(KeyCode.Space)) {
      fallDown();
    }
  }

  if (Input.GetKeyDown(KeyCode.Escape)) {
    if (!paused) {
      pause();
    } else {
      resume();
    }
  }

}

// Вспомогательная функция для проверки валидности положения фигуры после перемещения
function isValidGridPos() : boolean {
  for (var child : Transform in transform) {
    var v : Vector2 = Grid.roundVec2(child.position);
      if (!Grid.insideBorder(v))
        return false;

      if (Grid.grid[v.x, v.y] != null && Grid.grid[v.x, v.y].parent != transform) {

        return false;
      }
  }
  return true;
}

function updateGrid() {
  for (var y : int = 0; y < Grid.h; y++)
    for (var x : int = 0; x < Grid.w; x++)
      if (Grid.grid[x, y] != null) {
        if (Grid.grid[x, y].parent == transform) {
          Grid.grid[x, y] = null;
        }
      }

  for (var child : Transform in transform) {
    var v : Vector2 = Grid.roundVec2(child.position);
    Grid.grid[v.x, v.y] = child;
  }
}

function moveLeft () {
  transform.position += new Vector3(-1, 0, 0);

  if (isValidGridPos()) {
    updateGrid();
  } else {
    transform.position += new Vector3(1, 0, 0);
  }
}

function moveRight () {
  transform.position += new Vector3(1, 0, 0);

  if (isValidGridPos()) {
    updateGrid();
  } else {
    transform.position += new Vector3(-1, 0, 0);
  }
}

function moveDown () {
  transform.position += new Vector3(0, -1, 0);

  if (isValidGridPos()) {
    updateGrid();
  } else {
    // Поднимаем обратно
    transform.position += new Vector3(0, 1, 0);
    // Чистим полные ряды
    Grid.deleteFullRows();
    // Спавним следующую фигуру
    FindObjectOfType.<Spawner>().spawnNext();
    // Отключаем работу скрипта
    enabled = false;
  }

  lastFall = Time.time;
}

function fallDown () {
  while (isValidGridPos()) {
    transform.position += new Vector3(0, -1, 0);
  }
  transform.position += new Vector3(0, 1, 0);
  updateGrid();
  Grid.deleteFullRows();
  FindObjectOfType.<Spawner>().spawnNext();
  enabled = false;
}

function rotate () {
  transform.Rotate(0, 0, -90);

  if (isValidGridPos()) {
    updateGrid();
  } else {
    transform.Rotate(0, 0, 90);
  }
}

static function setSpeed (lvl : int) {
  speed = 1.1 - (0.1 * lvl);
}

static function pause () {
    pauseTime = Time.timeScale;
    Time.timeScale = 0;
    paused = true;
    Pause.pause();
}

static function resume () {
  Time.timeScale = pauseTime;
  paused = false;
  Pause.resume();
}