static var score : int;        // The player's score.
private var text : Text;       // Reference to the Text component.


function Awake ()
{
    text = GetComponent (Text);
    score = 0;
}


function Update ()
{
    text.text = " " + score;
}