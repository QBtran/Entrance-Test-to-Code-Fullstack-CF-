// // bai1
// function adjacentElementsProduct(inputArray) {
//   var arr = inputArray;
//   var x = 0;
//   var y = 0;
//   var p = -Infinity;
//   for (var i = 0; i < arr.length; i++) {
//     x = arr[i];
//     y = arr[i + 1];
//     if (x * y > p) {
//       p = x * y;
//     }
//   }
//   return p;
// }
// console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));
// // bai2
// function alternatingSums(a) {
//   return [
//     a.filter((el, i) => i % 2 === 0).reduce((b, c) => b + c, 0),
//     a.filter((el, i) => i % 2 !== 0).reduce((b, c) => b + c, 0),
//   ];
// }
// console.log(alternatingSums([60, 40, 55, 75, 64]));
const endpoint = "https://api.shrtco.de/v2/";

getapi(endpoint);

function getrandom() {
  const random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return random_string;
}
function geturl() {
  const url = document.getElementById("urlinput").value;
  const protocol_ok =
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("ftp://");
  if (!protocol_ok) {
    newurl = "http://" + url;
    return newurl;
  } else {
    return url;
  }
}
function genhash() {
  if (window.location.hash == "") {
    window.location.hash = getrandom();
  }
}
function shorturl() {
  var longurl = geturl();
  genhash();
  send_request(longurl);
}
function send_request(url) {
  this.url = url;
  $.ajax({
    url: endpoint + "/" + window.location.hash.substr(1),
    type: "POST",
    data: JSON.stringify(this.url),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  });
}
const hashh = window.location.hash.substr(1);
if (window.location.hash != "") {
  $.getJSON(endpoint + "/" + hashh, function (data) {
    data = data["result"];
    if (data != null) {
      window.location.href = data;
    }
  });
}
