#pragma strict

// Создание массива всех точек
static var w : int = 10;
static var h : int = 20;
static var grid : Transform[,] = new Transform[w, h];

// ####################### //
// Вспомогательные функции //
// ####################### //


// Проверка на нахождение фигуры внутри игрового поля
static function insideBorder (pos : Vector2) : boolean {

}

// Проверка на заполненность ряда
static function isRowFull (y : int) {

}

// Спуск ряда вниз
static function decreaseRow (y : int) {

}

// Спуск всех рядов выше заданного
static function decreaseRowsAbove (y : int) {

}

// Удаление одного ряда
static function deleteRow (y : int) {

}

// Удаление всех полных рядов
static function deleteFullRows () {

}

// Округление вектора поворота
static function roundVec2 (v : Vector2) : Vector2 {
    return new Vector2 (Mathf.Round(v.x), Mathf.Round(v.y));
}



// // Проверка на возможность передвижения фигуры

// // Генерация 7 фигур
// // Рандомная генерация и отбражение следующей фигуры
// // Ротация фигур по кнопке ↑
// // Ускорение фигуры по кнопке ↓ (бросок - по пробелу)
// // Сгорание заполненной линии, завершение игры (проигрыш)
// // Начисление очков
// // Поддержка уровней и скоростей (включая переходы по уровням внутри одной игры)
// // Стартовый экран, пауза, визуальные фичи