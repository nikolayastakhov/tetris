#pragma strict

var groups : GameObject[];

function Start () {
  // spawnNext();
}

function spawnNext () {
  var i : int = Random.Range(0, groups.Length);
  Instantiate(groups[i], Vector3(Random.Range(1,9)+0.5,Random.Range(1,19)+0.5,0), Quaternion.identity);
}