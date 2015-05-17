#pragma strict

var groups : GameObject[];
static var queue : Array = [];

function Start () {
  enqueueNext();
  enqueueNext();
  spawnNext();
  FindObjectOfType.<Next>().drawNext();
}

function spawnNext () {
  var i : int = queue.Shift();
  if (i == 3) {
    // Если квадрат, то сдвигаем на половину клетки
    Instantiate(groups[i], Vector3(4.5,19.5,0), Quaternion.identity);
  } else {
    Instantiate(groups[i], transform.position, Quaternion.identity);
  }
  enqueueNext();
  FindObjectOfType.<Next>().drawNext();
}

function enqueueNext () {
  queue.Push(Random.Range(0, groups.Length));
}