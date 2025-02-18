//마무리 문제1
var price1 = 3000;
var price2 = 6000;
var price3 = 3000;
var total = price1 + price2 + price3;

var moneyResult = price1 + price2 + price3 > 10000 ? `${total-10000}원 초과` : "돈 관리 잘했어요";
document.write(moneyResult , "<hr> <br>");

//마무리 문제2
var div1 = 1200;
var div2 = 1300;
var div3 = 1000;
var div4 = prompt("4분기 판매량은?");
var avarage = (div1 + div2 + div3) / 3;

var avarageMoney = div4 >= avarage ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다";
document.write("전 분기 평균 판매량은 ", avarage, "입니다.", "<br>");
document.write(avarageMoney);