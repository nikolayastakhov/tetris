#pragma strict

var groups : GameObject[];

function Start () {
  spawnNext();
}

function spawnNext () {
  var i : int = Random.Range(0, groups.Length);
  Instantiate(groups[i], transform.position, Quaternion.identity);
}