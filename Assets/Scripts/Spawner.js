#pragma strict

var groups : GameObject[];
var piece : GameObject;

function Start () {
  // spawnNext();
}

function spawnNext () {
  var i : int = Random.Range(0, groups.Length);
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
	   if (Input.GetKeyDown(KeyCode.Escape))
    {
        Application.LoadLevel (2);
    }
}