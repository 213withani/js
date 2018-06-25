# _.map
https://dustinpfister.github.io/2018/02/02/lodash_map/

# code
{
var arr = [1,2,3,4,5];
 
arr = _.map(arr, function(el){
 
    return el * 10;
 
});
 
console.log(arr);
// [10,20,30,40,50]
}
