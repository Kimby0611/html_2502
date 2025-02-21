//sec1
var tv1 = new Object();
tv1.color = "white";
tv1.price = 300000;
tv1.info = function () {
    document.getElementById('p1').innerHTML = 'tv 색상: ' + this.color + "<br>";
    document.getElementById('p1').innerHTML += 'tv 가격: ' + this.price + "<br>";
}
var car1 = {
    color : "black",
    price : "500000",
    info : function () {
        document.getElementById('p1').innerHTML += 'car 색상: ' + this.color + "<br>";
        document.getElementById('p1').innerHTML += 'car 가격: ' + this.price + "<br>";
    }
};
document.getElementById('p1').innerHTML += '<h1>tv 객체 메서드 호출</h1>';
tv1.info();
document.getElementById('p1').innerHTML += '<h1>car 객체 메서드 호출</h1>';
car1.info();

//sec2
const sec2 = document.querySelector('#sec2 .result');
var today2 = new Date();
var nowMonth2 = today2.getMonth(),
                nowDate2 = today2.getDate(), nowDay2 = today2.getDay();

sec2.innerHTML = '<h1>오늘 날짜 정보</h1>';
sec2.innerHTML += '현재 월 : ' + nowMonth2 + '<br>';
sec2.innerHTML += '현재 일 : ' + nowDate2 + '<br>';
sec2.innerHTML += '현재 요일 : ' + nowDay2 + '<br>';
var worldcup2 = new Date(2002, 4, 31);
var theMonth2 = worldcup2.getMonth(),
                theDate2 = worldcup2.getDate(), theDay2 = worldcup2.getDay();
sec2.innerHTML += '<h1>월드컵 날짜 정보</h1>';
sec2.innerHTML += '2002월드컴 몇월 : ' + theMonth2 + '<br>';
sec2.innerHTML += '2002월드컴 며칠 : ' + theDate2 + '<br>';
sec2.innerHTML += '2002월드컵 무슨 요일 : ' + theDay2 + '<br>';

//sec3
var today3 = new Date();
var nowYear3 = today2.getFullYear();
var theDate3 = new Date(nowYear3, 11, 31);
var diffDate3 = theDate3.getTime() - today3.getTime();
var result3 = Math.ceil(diffDate3 / (60 * 1000 * 60 * 24));
document.querySelector('#sec3 .result').innerHTML = '연말 D-day: ' + result3 + '일 남았습니다';

//sec4
const sec4 = document.querySelector('#sec4 .result');
var num4 = 2.1234;
var maxNum4 = Math.max(10, 5, 8, 30),
    minNum4 = Math.min(10, 5, 8, 30),
    roundNum4 = Math.round(num4),
    floorNum4 = Math.floor(num4),
    ceilNum4 = Math.ceil(num4),
    rndNum4 = Math.random(),
    piNum4 = Math.PI;
sec4.innerHTML = 'maxNum : ' + maxNum4 + '<br>' + 'minNum : ' + minNum4 + '<br>' + 'roundNum : ' + roundNum4 + '<br>' + 'floorNum : ' + floorNum4 + '<br>' +
                 'ceilNum : ' + ceilNum4 + '<br>' + 'rndNum : ' + rndNum4 + '<br>' + 'piNum : ' + piNum4;

//sec5
const sec5 = document.querySelector('#sec5 .result');
sec5.innerHTML = '<h1>컴퓨터 가위, 바위, 보 맞추기</h1>';
function btn5 () {
    var inp5 = document.getElementById('inp5').value;;
    var gameNum5;
    switch(inp5) {
        case "가위":
            gameNum5 = 1;
            break;
        case "바위":
            gameNum5 = 2;
            break;
        case "보":
            gameNum5 = 3;
            break;    
        default: alert("잘못 작성했습니다.");
        location.reload();
    }
    var com5 = Math.ceil(Math.random() * 3);
    document.getElementById('p5').innerHTML = "<img src=\"images/math_img_" + com5 + ".jpg\">";
    if (gameNum5 == com5) {
        sec5.innerHTML = '<img src = \"../images/game_1.jpg\">';
    } else {
        sec5.innerHTML = '<img src = \"../images/game_2.jpg\">';
    }
}

//sec6 가위바위보 승패 연습
var sec6 = document.querySelector('#sec6 .result');
sec6.innerHTML = '<h2>하나 골라보자</h2>'
document.getElementById('img1').innerHTML = "<img src=\"images/math_img_1.jpg\" id=\"sisser\" width = \"100\" height = \"100\">" + 
                                            "<img src=\"images/math_img_2.jpg\" id=\"rock\" width = \"100\" height = \"100\">" + "<img src=\"images/math_img_3.jpg\" id=\"papper\" width = \"100\" height = \"100\">";
document.getElementById('img1').addEventListener('click', function(e) {
    var gameNum6;
    switch (e.target.id) {
        case 'sisser':
            gameNum6 = 1; break;
        case 'rock':
            gameNum6 = 2; break;
        case 'papper':
            gameNum6 = 3; break;
    }
    console.log("사용자 선택:", gameNum6);
    var com6 = Math.ceil(Math.random() * 3);
    console.log("컴퓨터 선택:", com6);

    document.getElementById('p6').innerHTML = "<img src=\"images/math_img_" + com6 + ".jpg\">";
    if (gameNum6 == com6) {
        sec6.innerHTML = '비겼네요';
    } else if ((com6 == 1 && gameNum6 == 2) || (com6 == 2 && gameNum6 == 3) || (com6 == 3 && gameNum6 == 1)) {
        sec6.innerHTML = '이겼어요';
    } else {
        sec6.innerHTML = '졌어요';
    }
})