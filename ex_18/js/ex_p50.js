//산술 연산자
var num1 = 15;
var num2 = 2;
var result;
document.write("<h1>산술 연산자</h1> <br>");
result1_1 = num1 + num2;
document.write(result1_1, "<br>");
result1_2 = num1 - num2;
document.write(result1_2, "<br>");
result1_3 = num1 * num2;
document.write(result1_3, "<br>");
result1_4 = num1 / num2;
document.write(result1_4, "<br>");
result1_5 = num1 % num2;
document.write(result1_5, "<br> <hr>");

//문자 결합 연산자
document.write("<h1>문자 결합 연산자</h1> <br>");
var t1 = "학교종이 ";
var t2 = "땡땡땡 ";
var t3 = 8282;
var t4 = " 어서 모이자";
var result;
result = t1 + t2 + t3 + t4;
document.write(result, "<hr>");

//템플릿 문자열
document.write("<h1>템플릿 문자열</h1> <br>");
const year = 2002;
const conutry = "대한민국";
const eventName = "월드컵";
const str_1 = `${year}년 ${conutry} ${eventName} 개최<br><br>`;
document.write(str_1);

const age = 10;
const afterYear = 10;
const str_2 = `현재 나이는 ${age}살이지만<br> ${afterYear} 년 후에는 ${age+afterYear}살이 됩니다.`
document.write(str_2, "<br> <hr>");

//대입 연산자
document.write("<h1>대입 연산자</h1>");
var num4_1 = 10;
var num4_2 = 3;
num4_1 += num4_2;
document.write(num4_1, "<br>");
num4_1 -= num4_2;
document.write(num4_1, "<br>");
num4_1 *= num4_2;
document.write(num4_1, "<br>");
num4_1 %= num4_2;
document.write(num4_1, "<br> <hr>");

//문자형 데이터를 복합 대입 연산자
document.write("<h1>복합 대입 연산자</h1>");
var str5_1 = '<table border = "1">';
str5_1 += "<tr>";
str5_1 += "<td>1</td><td>2</td><td>3</td>";
str5_1 += "</tr>";
str5_1 += "</table>";
document.write(str5_1, "<br> <hr>");

//증감 연산자
document.write("<h1>증감 연산자</h1>");
var num6_1 = 10;
var num6_2 = 20;
var result6;
num6_1--;
document.write(num6_1, "<br>");
num6_1++;
document.write(num6_1, "<br>");
result6 = num6_2++;
document.write(result6, "<br>");
result6 = ++num6_2;
document.write(result6, "<br>", "<br> <hr>");

//비교 연산자
document.write("<h1>비교 연산자</h1>");
var a = 10;
var b = 20;
var c = 30;
var d = "20";
var result7;

result7 = a > b;
document.write(result7, "<br>");
result7 = a < b;
document.write(result7, "<br>");
result7 = a <= b;
document.write(result7, "<br>");
result7 = b == d;
document.write(result7, "<br>");
result7 = a != b;
document.write(result7, "<br>");
result7 = b === d;
document.write(result7, "<br>", "<br> <hr>");

//논리 연산자
document.write("<h1>논리 연산자</h1>");
var k = 10;
var l = 20;
var m = 30;
var n = 40;
var result8;

result8 = k > l || l >= m || m > n;
document.write(result8, '<br>');
result8 = k > l || l >= m || m <= n;
document.write(result8, '<br>');
result8 = k <= l && l >= m && m <= n;
document.write(result8, '<br>');
result8 = k <= l && l <= m || m <= n;
document.write(result8, '<br>');
result8 = !(k > l);
document.write(result8, '<br>', "<br> <hr>");

//삼항 조건 연산자
document.write("<h1>삼항 조건 연산자</h1>");
var a9 = 10;
var b9 = 3;

var result9 = a9 > b9 ? "javascript" : "hello";
document.write(result9);