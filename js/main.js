// Variable Declaration
var count = 0;
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");

// Counter Minus
minus.onclick = function () {
    count -= 1;
    if (count > -1) {
        result.innerHTML = count;
    } else {
        alert("can't minus");
    }
};

// Counter Plus
plus.onclick = function () {
    count += 1;
    result.innerHTML = count;
};



// Alternative Way

// var count = 0;
// var plus = document.getElementById('plus');
// var minus = document.getElementById('minus');
// var result = document.getElementById('result');

// plus.addEventListener('click', function () {
//   count = count + 1;
//   result.innerHTML = count;
// });

// minus.addEventListener('click', function () {
//   count = count - 1;
//   if (count > -1) {
//     result.innerHTML = count;
//   } else {
//     alert('Gak bisa minus cuy');
//   }
// });