## Что выводит данный код

На скриншоте представлен перебор массива чисел.
На каждой итерации вызывается функция, которая в зависимости от условия тренарного оператора через три секунды выведет в консоль строки:
"Bad: 10"
"Bad: 12"
"Good: 15"
"Good: 21"

## Две модификации кода

1. С помощью метода forEach:
```javascript
const arr = [10, 12, 15, 21];
arr.forEach((value, index) => {
  setTimeout(function () {
    console.log(value > 13 ? `Good: ${value}` : `Bad: ${value}`);
  }, 3000);
});
```


2. С помощью метода map:
```javascript
const arr = [10, 12, 15, 21];
  arr.map((value) => {
  return value > 13 ? `Good: ${value}` : `Bad: ${value}`;
}).forEach((value) => {
  setTimeout(function () {
    console.log(value);
  }, 3000);
});
```

