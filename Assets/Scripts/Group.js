#pragma strict

var lastFall : float = 0;

function Start () {
  if (!isValidGridPos()) {
    Debug.Log("GAME OVER");
    Destroy(gameObject);
  }
}

function Update () {

  if (Input.GetKeyDown(KeyCode.LeftArrow)) {

    transform.position += new Vector3(-1, 0, 0);

    if (isValidGridPos()) {
      updateGrid();
    } else {
      transform.position += new Vector3(1, 0, 0);
    }

  } else if (Input.GetKeyDown(KeyCode.RightArrow)) {

    transform.position += new Vector3(1, 0, 0);

    if (isValidGridPos()) {
      updateGrid();
    } else {
      transform.position += new Vector3(-1, 0, 0);
    }

  } else if (Input.GetKeyDown(KeyCode.DownArrow) || Time.time - lastFall >= 1) {

    transform.position += new Vector3(0, -1, 0);


    if (isValidGridPos()) {
      updateGrid();
    } else {
      // Опускаем
      transform.position += new Vector3(0, 1, 0);
      // Чистим полные ряды
        Grid.deleteFullRows();
      // Спавним следующую фигуру
        FindObjectOfType.<Spawner>().spawnNext();
      // Отключаем работу скрипта
        enabled = false;
    }

    lastFall = Time.time;

  } else if (Input.GetKeyDown(KeyCode.UpArrow)) {
    transform.Rotate(0, 0, -90);

    if (isValidGridPos()) {
      updateGrid();
    } else {
      transform.Rotate(0, 0, 90);
    }
  }
}

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