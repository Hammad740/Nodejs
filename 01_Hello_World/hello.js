console.log('Hey there i am nodejs');

// console.log(window);
// console.log(alert('hey'));

//? all the dom related and ui related things are not available in nodejs only core functionality of js is present in nodejs and some functionality is removed and some is added

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
export default { add, sub };
