//sec1
var arr1 = [30, "따르릉", true];
document.getElementById("p1").innerHTML = "<h3>배열값 가져오기-1</h3>";
document.getElementById("p1").innerHTML += arr1[0] + "<br>";
document.getElementById("p1").innerHTML += arr1[1] + "<br>";
document.getElementById("p1").innerHTML += arr1[2] + "<br>" + "<hr>";
document.getElementById("p1").innerHTML += "<h3>배열값 가져오기-2</h3>";
for (var i = 0; i < arr1.length; i++) {
    document.getElementById("p1").innerHTML += arr1[i] + "<br>"
}
document.getElementById("p1").innerHTML += "<hr>" +"<h3>배열값 가져오기-3</h3>";
for (i in arr1) {
    document.getElementById("p1").innerHTML += arr1[i] + "<br>"
}

// document.write("<h3>배열값 가져오기-1</h3>");
// document.write(arr1[0], "<br>");
// document.write(arr1[1], "<br>");
// document.write(arr1[2], "<br>");
// document.write("<h3>배열값 가져오기-2</h3>");
// for (var i = 0; i < arr1.length; i++) {
//     document.write(arr1[i], "<br>");
// }
// document.write("<h3>배열값 가져오기-1</h3>");
// for (i in arr1) {
//     document.write(arr1[i], "<br>")
// }

//sec2
var arr_2_1 = ["사당", "교대", "방배", "강남"];
var arr_2_2 = ["신사", "압구정", "옥수"];

var result2_1 = arr_2_1.join("-");
console.log(result2_1);
document.getElementById('p2').innerHTML = "<h3>join('-') >> - 로 합치기</h3>"
document.getElementById('p2').innerHTML += result2_1 + "<br>";
var result2_2 = arr_2_1.concat(arr_2_2);
console.log(result2_2);
document.getElementById('p2').innerHTML += "<h3>x.concat(y) >> 배열 두 개를 하나로 합치기</h3>"
document.getElementById('p2').innerHTML += result2_2 + "<br>"
var result2_3 = arr_2_1.slice(1, 3);
console.log(result2_3);
document.getElementById('p2').innerHTML += "<h3>slice(x, y) >> 배열 객체의 x부터 y이전까지를 잘라서 배열로 가져옴</h3>"
document.getElementById('p2').innerHTML += result2_3 + "<br>"
var result2_4 = arr_2_1.sort();
console.log(result2_4);
document.getElementById('p2').innerHTML += "<h3>sort(오름차순 정렬)</h3>"
document.getElementById('p2').innerHTML += result2_4 + "<br>"
var result2_5 = arr_2_2.reverse();
console.log(result2_5);
document.getElementById('p2').innerHTML += "<h3>reverse() >> 배열 순서 거꾸로(내림차순 x)</h3>"
document.getElementById('p2').innerHTML += result2_5 + "<br>"

//sec3
var greenArr3 = ["교대", "방배", "강남"];
var yellowArr3_1 = ["미금", "정자", "수서"];
var yellowArr3_2 = ["미금", "정자", "수서"];

greenArr3.splice(2, 1, "서초", "역삼");
console.log(greenArr3);
document.getElementById("p3").innerHTML = "<h3>splice(x, y, data1, data2) >> splice(시작지점, 삭제할 개수, 삽입할 데이터1, 삽입할 데이터2)</h3>";
document.getElementById("p3").innerHTML += greenArr3 + "<br>";
var data3_1 = yellowArr3_1.pop();
var data3_2 = yellowArr3_1.shift();
yellowArr3_1.push(data3_2);
console.log(yellowArr3_1);
document.getElementById("p3").innerHTML +="<h3>shift >> 가장 앞쪽 인덱스의 데이터, push >> 배열의 마지막에 추가</h3>";
document.getElementById("p3").innerHTML += yellowArr3_1 + "<br>";
yellowArr3_1.unshift(data3_1);
console.log(yellowArr3_1);
document.getElementById("p3").innerHTML += "<h3>pop >> 배열의 마지막 인덱스의 데이터 제거, unshift >> 배열의 가장 앞쪽에 추가</h3>";
document.getElementById("p3").innerHTML += yellowArr3_1 + "<br>";

//sec4
var t = "Hello Thank you good luck to you";
var s = t.split(" ");
var str = "A";
var ta = str.charCodeAt(0);

document.getElementById("p4").innerHTML = "<h3>charAt(x) >> 인덱스 x에 저장된 문자</h3>";
document.getElementById("p4").innerHTML += t.charAt(16) + "<br>";
document.getElementById("p4").innerHTML += "<h3>indexOf(x) >> 왼쪽부터 인덱스 x의 인덱스값을 반환, (x, 5) >> 5번째부터 시작 후 x의 인덱스값을 반환(오른쪽으로 카운트)</h3>";
document.getElementById("p4").innerHTML += t.indexOf("you") + "<br>";
document.getElementById("p4").innerHTML += t.indexOf("you", 16) + "<br>";
document.getElementById("p4").innerHTML += "<h3>lastIndexOf >> indexOf()의 반대 (왼쪽으로 카운트)</h3>";
document.getElementById("p4").innerHTML += t.lastIndexOf("you") +  "<br>";
document.getElementById("p4").innerHTML += t.lastIndexOf("you", 25) + "<br>";
document.getElementById("p4").innerHTML += "<h3>match(x) >> x찾기, 문자 반환</h3>";
document.getElementById("p4").innerHTML += t.match("luck") + "<br>";
document.getElementById("p4").innerHTML += "<h3>search(x) >> x찾기, 인덱스값 반환</h3>";
document.getElementById("p4").innerHTML += t.search("you") + "<br>";
document.getElementById("p4").innerHTML += "<h3>substr(x, y) >> x부터 y개 반환</h3>";
document.getElementById("p4").innerHTML += t.substr(21, 4) + "<br>";
document.getElementById("p4").innerHTML += "<h3>substring(x, y) >> x부터 y까지의 문자 반환</h3>";
document.getElementById("p4").innerHTML += t.substring(6, 12) + "<br>";
document.getElementById("p4").innerHTML += "<h3>replace(x, y) >> 처음 나오는 x를 y로 바꿈</h3>";
document.getElementById("p4").innerHTML += t.replace("you", "me") + "<br>";
document.getElementById("p4").innerHTML += "<h3>toLowerCase >> 소문자 변환</h3>";
document.getElementById("p4").innerHTML += t.toLowerCase() + "<br>";
document.getElementById("p4").innerHTML += "<h3>toUpperCase >> 대문자 변환</h3>";
document.getElementById("p4").innerHTML += t.toUpperCase() + "<br>";
document.getElementById("p4").innerHTML += "<h3>length >> 총 개수를 반환, 공백도 문자로 취급</h3>";
document.getElementById("p4").innerHTML += t.length + "<br>";
document.getElementById("p4").innerHTML += "<h3>split('x') >> x(공백, - 등)를 기준으로 문자 분리</h3>";
document.getElementById("p4").innerHTML += s[0] + "<br>";
document.getElementById("p4").innerHTML += s[4] + "<br>";
document.getElementById("p4").innerHTML += "<h3>str.charCodeAt(x) >> x번째 인덱스의 문자의 아스키 코드값을 반환</h3>";
document.getElementById("p4").innerHTML += ta + "<br>";
document.getElementById("p4").innerHTML += "<h3>String.fromCharCode(x) >> 아스키 코드값 x에 해당하는 문자를 반환</h3>";
document.getElementById("p4").innerHTML += String.fromCharCode(65);

// document.write(t.charAt(16), "<br>");
// document.write(t.indexOf("you"), "<br>");
// document.write(t.indexOf("you", 16), "<br>");
// document.write(t.lastIndexOf("you"), "<br>");
// document.write(t.lastIndexOf("you", 25), "<br>");
// document.write(t.match("luck"), "<br>");
// document.write(t.search("you"), "<br>");
// document.write(t.substr(21, 4), "<br>");
// document.write(t.substring(6, 12), "<br>");
// document.write(t.replace("you", "me"), "<br>");
// document.write(t.toLowerCase(), "<br>");
// document.write(t.toUpperCase(), "<br>");
// document.write(t.length, "<br>");

// document.write(s[0], "<br>");
// document.write(s[4], "<br>");

// document.write(ta, "<br>");
// document.write(String.fromCharCode(65));