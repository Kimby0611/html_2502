//sec1
function popup () {
    window.open("http://127.0.0.1:5500/windowpopup.html", "pop1", "width = 300, height = 400, left = 300, top = 50");
}
// window.open("http://127.0.0.1:5500/windowpopup.html", "pop1", "width = 300, height = 400, left = 300, top = 50");

//sec2
var addNum = 0;
var subNum = 1000;
var auto1;
var auto2;
document.getElementById('p2').innerHTML = "addNum: " + addNum + '<br>subNum: ' + subNum;
function start1 () {
    auto1 = setInterval(function () {
        addNum ++;
        // console.log("addNum: " + addNum);
        document.getElementById('p2').innerHTML = "addNum: " + addNum + '<br>' + "subNum: " + subNum;
    }, 3000);
};
function start2 () {
    auto2 = setInterval(function () {
        subNum --;
        // console.log("subNum: " + subNum);
        document.getElementById('p2').innerHTML = "addNum: " + addNum + '<br>' + "subNum: " + subNum;
    }, 3000);
};

//sec3
var addNum10 = 0;
var auto_10 = setTimeout(function () {
    addNum10 ++;
    console.log(addNum10)
    document.getElementById("p3").innerHTML = addNum10;
}, 3000);

//sec4
var info = navigator.userAgent.toLowerCase();
var osImg = null;
console.log(info)
if (info.indexOf('windows') >= 0) {
    osImg = "../images/windows.png";
} else if (info.indexOf('macintosh') >= 0) {
    osImg = "../images/macintosh.png";
}  else if (info.indexOf('iphone') >= 0) {
    osImg = "../images/iphone.png";
}  else if (info.indexOf('android') >= 0) {
    osImg = "../images/android.png";
}
document.getElementById("p4").innerHTML = "<img src=\"images/" + osImg + "\">" + "<br>";
var src = screen;
var sc_w = screen.width;
var sc_h = screen.height;
document.getElementById("p4").innerHTML += '모니터 해상도 너비: ' + sc_w + 'px' + '<br>';
document.getElementById("p4").innerHTML += '모니터 해상도 높이: ' + sc_h + 'px' + '<br>';

//sec5
document.getElementById("btn5").addEventListener("click", function () {
    var phoneNum = prompt("전화번호를 입력하세요", "0");
    while (phoneNum == "" || phoneNum.length < 10 || phoneNum.length > 12) {
        alert("유효한 전화번호를 입력하세요");
        var phoneNum = prompt("전화번호를 입력하세요", "0");
    }
    var result12 = phoneNum.substring(0, phoneNum.length - 4) + "****";
    document.getElementById("p5").innerHTML = result12 + "<br>";
})

// var phoneNum = "010-1234-1234";
// var result12 = phoneNum.substring(0, phoneNum.length - 4) + "****";
// document.getElementById("p12").innerHTML = result12 + "<br>";
var imgSrc = "../images/bnt_out.jpg";
var result12_2 = imgSrc.replace("out", "over");
document.getElementById("p5").innerHTML += result12_2;

//sec6
var menu = ["짜장면", "돈까스", "김치찌개", "회덮밥"];
var random = Math.random();
var menuNum = Math.floor(random * menu.length);
console.log(random * menu.length);
console.log(random);
var result13 = menu[menuNum];
document.getElementById("p6").innerHTML = result13;