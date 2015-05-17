#pragma strict

var groups : GameObject[];
// static var queue : Array = [];
// var nextPiece : GameObject;

function Start () {
  spawnNext();
}

function spawnNext () {
  var i : int = Random.Range(0, groups.Length);
  if (i == 3) {
    // Если квадрат, то сдвигаем на половину клетки
    Instantiate(groups[i], Vector3(4.5,19.5,0), Quaternion.identity);
  } else {
    Instantiate(groups[i], transform.position, Quaternion.identity);
  }
}

// function enqueueNext () {
//   queue.Push(Random.Range(0, groups.Length));
// }