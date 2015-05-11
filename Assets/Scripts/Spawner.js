#pragma strict

var groups : GameObject[];
var piece : GameObject;


function Start () {
  spawnNext();
}

function spawnNext () {
  var i : int = Random.Range(0, groups.Length);
  piece = Instantiate(groups[i], transform.position, Quaternion.identity);
}