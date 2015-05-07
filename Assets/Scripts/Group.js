// #pragma strict

// static function validGridPos () : boolean {
//   for (var child : Transform in transform) {
//     var v : Vector2 = Grid.roundVec2(child.position);

//     // Not inside Border?
//     if (!Grid.insideBorder(v)) {
//       return false;
//     }

//     // Block in grid cell (and not part of same group)?
//     if (Grid.grid[v.x : int, v.y : int] != null &&
//         Grid.grid[v.x : int, v.y : int].parent != transform) {
//       return false;
//     }
//   }
//   return true;
// }