#pragma strict

var next : int;
var sprites : Array = ["next_I", "next_J", "next_L", "next_O", "next_S", "next_T", "next_Z"];

function drawNext () {
    next = Spawner.queue[0];
    gameObject.GetComponent.<SpriteRenderer>().sprite = Resources.Load(sprites[next], typeof(Sprite)) as Sprite;
}