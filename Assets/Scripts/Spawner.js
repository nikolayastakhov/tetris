#pragma strict

var groups : GameObject[];
static var queue : Array = [];


function Start () {
<<<<<<< HEAD
  spawnNext();
}

function spawnNext () {
  var i : int = Random.Range(0, groups.Length);
//<<<<<<< HEAD
  piece = new Instantiate(groups[i], Vector3(Random.Range(0,9)+0.5,Random.Range(0,19)+0.5,0), Quaternion.identity);
}

function destroyLast () {
  Destroy(piece);
}

function moveLeft () {
  piece.transform.position += new Vector3(-1, 0, 0);
}

function moveRight () {
  piece.transform.position += new Vector3(1, 0, 0);
}

function moveDown () {
  piece.transform.position += new Vector3(0, -1, 0);
}

function moveUp () {
  piece.transform.position += new Vector3(0, 1, 0);
}

function rotate () {
  piece.transform.Rotate(0, 0, -90);
}
function Update (){
	var i : int = Random.Range(0, groups.Length);
	   if (Input.GetKeyDown(KeyCode.Escape))
    {
        Application.LoadLevel (2);
    }
//=======
  piece = Instantiate(groups[i], transform.position, Quaternion.identity);
//>>>>>>> origin/develop
=======
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
>>>>>>> origin/develop
}