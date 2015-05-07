#pragma strict

// Создание массива всех точек
static var w : int = 10;
static var h : int = 20;
static var grid : Transform[,] = new Transform[w, h];

// ####################### //
// Вспомогательные функции //
// ####################### //

// Округление вектора поворота
static function roundVec2 (v : Vector2) : Vector2 {
    return new Vector2 (Mathf.Round(v.x), Mathf.Round(v.y));
}

// Проверка на нахождение фигуры внутри игрового поля
static function insideBorder (pos : Vector2) : boolean {
    return (pos.x >= 0 &&
            pos.x < w &&
            pos.y >= 0);
}

// Проверка на заполненность ряда
static function isRowFull (y : int) {
  for (var x = 0; x < w; x++)
    if (grid[x, y] == null)
      return false;
  return true;
}

// Спуск ряда вниз
static function decreaseRow (y : int) {
  for (var x = 0; x < w; x++) {
    if (grid[x, y] != null) {
      // Сдвигаем на один ряд в низ в пределах сетки
      grid[x, y-1] = grid[x, y];
      grid[x, y] = null;

      // Обновляем позицию самого блока
      grid[x, y-1].position += new Vector3(0, -1, 0);
    }
  }
}

// Спуск всех рядов выше заданного
static function decreaseRowsAbove (y : int) {
  for (var i = y; i < h; i++) {
    decreaseRow(i);
  }
}

// Удаление одного ряда
static function deleteRow (y : int) {
  for (var x = 0; x < w; x++) {
    Destroy(grid[x, y].gameObject);
    grid[x, y] = null;
  }
}

// Удаление всех полных рядов
static function deleteFullRows () {
  for (var y = 0; y < h; y++) {
    if (isRowFull(y)) {
      deleteRow(y);
      decreaseRowsAbove(y+1);
      y--;
    }
  }
}



// Проверка на возможность передвижения фигуры

// Генерация 7 фигур
// Рандомная генерация и отбражение следующей фигуры
// Ротация фигур по кнопке ↑
// Ускорение фигуры по кнопке ↓ (бросок - по пробелу)
// Сгорание заполненной линии, завершение игры (проигрыш)
// Начисление очков
// Поддержка уровней и скоростей (включая переходы по уровням внутри одной игры)
// Стартовый экран, пауза, визуальные фичи