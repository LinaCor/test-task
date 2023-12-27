const arr = [10, 12, 15, 21]

//for (let i = 0; i < arr.length; i++) {
//  setTimeout(function () {
//    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
//  }, 3000);
//};

//arr.forEach((value, index) => {
//  setTimeout(function () {
//    console.log(value > 13 ? `Good: ${value}` : `Bad: ${value}`)
//  }, 3000);
//});

arr.map((value) => {
  return value > 13 ? `Good: ${value}` : `Bad: ${value}`;
}).forEach((value) => {
  setTimeout(function () {
    console.log(value);
  }, 3000);
});