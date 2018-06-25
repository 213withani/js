# _.map
https://dustinpfister.github.io/2018/02/02/lodash_map/

```
var arr = [1,2,3,4,5];
 
arr = _.map(arr, function(el){
 
    return el * 10;
 
});
 
console.log(arr);
// [10,20,30,40,50]

```

https://lodash.com/docs/4.17.10#map

```
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
```
