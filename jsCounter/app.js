function count() {
  var count = 0;
  return function result() {
    count++;
    return count;
  }
}

var c = count();

function buttonCounter() {
  document.getElementById('counter').innerHTML = c();
}
