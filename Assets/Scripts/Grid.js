#pragma strict

// Создание массива всех точек
static var w : int = 10;
static var h : int = 21; // Высота увеличена для отсутствия ошибок при проверке положения фигуры на старте
static var grid : Transform[,] = new Transform[w, h];
static var rowCount : int;


function Awake () {
  rowCount = 0;
}

// ####################### //
// Вспомогательные функции //
// ####################### //


// Проверка на нахождение фигуры внутри игрового поля
static function insideBorder (pos : Vector2) : boolean {
  return (pos.x >= 0 && pos.x < w && pos.y >= 0);
}

// Проверка на заполненность ряда
static function isRowFull (y : int) : boolean {
  for (var x : int = 0; x < w; x++) {
    if (grid[x, y] == null)
            return false;
  }
  return true;
}

// Спуск ряда вниз
static function decreaseRow (y : int) {
  for (var x : int = 0; x < w; x++) {
    if (grid[x, y] != null) {
      // Move one towards bottom
      grid[x, y-1] = grid[x, y];
      grid[x, y] = null;

      // Update Block position
      grid[x, y-1].position += new Vector3(0, -1, 0);
    }
  }
}

// Спуск всех рядов выше заданного
static function decreaseRowsAbove (y : int) {
  for (var i : int = y; i < h; i++)
    decreaseRow(i);
}

// Удаление одного ряда
static function deleteRow (y : int) {
  for (var x : int = 0; x < w; x++) {
    Destroy(grid[x, y].gameObject);
    grid[x, y] = null;
  }
  rowCount += 1;
  if (rowCount == 10) {
    rowCount = 0;
    Level.level += 1;
  }
  Group.setSpeed(Level.level);
}

// Удаление всех полных рядов
static function deleteFullRows () {
  var counter : int = 0;
  var points : int[] = [0, 40, 100, 300, 1200];
  for (var y : int = 0; y < h; y++) {
    if (isRowFull(y)) {
      deleteRow(y);
      decreaseRowsAbove(y+1);
      y--;
      counter += 1;
    }
  }
  Score.score += points[counter] * Level.level;
  counter = 0;
}

// Округление вектора поворота
static function roundVec2 (v : Vector2) : Vector2 {
    return new Vector2 (Mathf.Round(v.x), Mathf.Round(v.y));
}