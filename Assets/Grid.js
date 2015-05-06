#pragma strict

// Размеры игрового поля
static var w : int = 10;
static var h : int = 20;
static var grid : Transform[,] = new Transform[w, h];

// Создание массива всех точек
// function Grid () {

// }

// Вспомогательные функции

// Округление вектора поворота
static function roundVector2 (v : Vector2) : Vector2 {
    return new Vector2 (Mathf.Round(v.x), Mathf.Round(v.y));
}

// Проверка на нахождение фигуры внутри игрового поля
static function insideBorders (pos : Vector2) : boolean {
    return (pos.x >= 0 &&
            pos.x < w &&
            pos.y >= 0);
}

// Проверка на заполненность ряда
static function isRowFull (y) {

}

// Спуск ряда вниз


// Удаление одного ряда
static function deleteRow (y) {

}

// Удаление всех полных рядов
static function deleteFullRows (y) {

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