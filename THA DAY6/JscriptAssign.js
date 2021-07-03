<script>
  function Input_Array(arr){
    return Array.isArray(arr);
}
  console.log(Input_Array('w3resource'));
  console.log(Input_Array([1, 2, 4, 0]));
</script>


// secend


function CloneWars(arr) {
  var NewArray = arr.slice();
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


// third



function first(arr, n) {
  return arr.slice(0, n);
}
console.log(first([7, 9, 0, -2], 1));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));



// 4th



myColor = ["Red", "Green", "White", "Black"];
function join_element(arr) {
  return arr.join("+");
}
join_element(myColor);

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var max_count = 1;
var count = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) count++;
    if (max_count < count) {
      max_count = count;
      item = arr1[i];
    }
  }
  count = 0;
}
console.log(item + " ( " + max_count + " times ) ");