//Js연동
document.write("<h2>Js연동</h2>");
document.write ("환영합니다.<br>");
var hr = "<br><hr>";
document.write(hr);

//변수 선언
document.write("<h2>변수 선언</h2>");
var box;
box = 100;
box = 30;
document.write(box, "<br>");
document.write(hr);

//문자형
var s = "javascript";
var num = "100";
var tag = "<h1> String </h1>";

//숫자형
var s = 100;
var t = Number("500");

//논리형
var s = true;
var t = 10 >= 100;
var k = Boolean("hello");

var m = Boolean(0);
var k = Boolean("홍길동");

//변수 출력
document.write("<h2>변수 추가 방법</h2>");
var a = true;
var b = false;
var c = 10 > 5;
var d = Boolean(null);
document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>");
document.write(d, "<br>");
document.write(hr);

//빈 데이터
var s;
var t = "hello";
t = null;
//typeof 변수 또는 데이터

//typeof 예제
document.write("<h2>typeof</h2>");
var num1 = 100;
var srt = "자바스크립트";
document.write(typeof num, "<br>");
document.write(typeof srt, "<br>");
document.write(hr);

//let 사용법 >>> 지역변수 ({} <안에서 선언되고 죽음 (중복처리 불가))
//let 변수 이름 = 초깃값;
//var >>> 전역변수 (중복처리하면 덮어쓰여짐)
//const >>> 특정 범위 내 상수 할당 재할당 불가
// var, let

//가능
var num2 = 10;
var num2 = 20;

let num4 = 10;
num4 = 20;

//불가
let num3 = 10;
// let num3 = 20;

const PI = 3.14;
//PI = 20;

//예제
document.write("<h2>const, let, var</h2>");
var num_1 = 100;
var num_1 = 200;
document.write(num_1, "<br>");

let num_2 = 10;
num_2 = 20;
document.write(num_2, "<br>");

const num_3 = 50;
document.write(num_3, "<br>");
document.write(hr);

//주의사항($, _, a-z만 변수의 첫글자 가능)
//document, locaion, window는 사용 불가(예약어)

//불가능한 변수선언
//var 1num = 10; 
// var @num = 10; 
//var document = 10;
//var num = "hello"

//가능한 변수선언
var $num = 10;
var num100 = 10;
var numnum = 10;
var num = 10;

document.write("<h2>변수 선언 주의사항</h2>");
//document.write(Num);
document.write(num);
document.write(hr);