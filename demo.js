/**
 * Created by HUQ on 10/7/15.
 */
function search(budget, prices) {
  var keepArray = [];
  for (var i in prices) {
    if (prices[i] <= budget) {
      keepArray.push(prices[i]);
    }

  };
  return keepArray.sort(function (a, b) {return a - b}).toString();
}

console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));
console.log(search(0, [6, 1, 2, 9, 2]));