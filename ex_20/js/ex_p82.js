//sec1
document.getElementById('p1').innerHTML = '네이버, 다음 , 네이트, 구글 중 \ 즐겨 사용하는 포털 검색 사이트는?'

function btn1 () {
    var site = document.getElementById('inp1').value;
    var url;

    switch(site) {
        case "구글" : url = "www.google.com";
        break;
        case "다음" : url = "www.daum.net";
        break;
        case "네이버" : url = "www.naver.com";
        break;
        case "네이트" : url = "www.nate.com";
        break;
        default: alert("보기 중에 없는 사이트입니다.");
    }
    if(url) {
        window.open('http://' + url, '_blank');
    }
}

// var site = prompt("네이버, 다음, 네이트, 구글 중 \ 즐겨 사용하는 포털 검색 사이트는?", "");
// var url;

// switch(site) {
//     case "구글" : url = "www.google.com";
//     break;
//     case "다음" : url = "www.daum.net";
//     break;
//     case "네이버" : url = "www.naver.com";
//     break;
//     case "네이트" : url = "www.nate.com";
//     break;
//     default: alert("보기 중에 없는 사이트입니다.")
// }
// // if(url) {s
// //     window.open('http://' + url, '_blank');
// // }
// if(url) location.href = 'http://' + url;

//sec2
var i = 1;
while(i <= 10) {
    document.getElementById('p2_1').innerHTML += '안녕하세요' + i + '<br>';
    i ++;
}
document.getElementById('p2_2').innerHTML = '==========The end=========';

// var i = 1;
// while(i <= 10) {
//     document.write("안녕하세요" + i, "<br>");
//     i ++;
// }
// document.write("===========The end==========")



//sec3
var i = 1;
while ( i<= 30) {
    if (i % 2 == 0 && i % 6 == 0) {
        document.getElementById('p3').innerHTML += i + "<br>";
    }
    i++;    
}

// var i = 1;
// while ( i<= 30) {
//     if (i % 2 == 0 && i % 6 == 0) {
//         document.write(i, "<br>");
//     }
//     i++;    
// }

//sec4
var i = 10;
while (i <= 20) {
    if (i % 2 == 0) {
        document.getElementById('p4').innerHTML += '<p class = "blue">' + i + '</p>';
    } else {
        document.getElementById('p4').innerHTML += '<p class = "red">' + i + '</p>';
    }
    i++;
}

// var i = 20;
// while (i >= 10) {
//     if (i % 2 == 0) {
//         document.write('<p class = "blue">' + i + '</p>');
//     } else {
//         document.write('<p class = "red">' + i + '</p>');
//     }
//     i--;
// }

//sec5
var i = 10;
do {
    document.getElementById('p5').innerHTML = "Hello!";
}
while (i < 3);

// var i = 10;
// do {
//     document.write("Hello!");
// }
// while (i < 3);

//sec6
for (var i = 1; i <= 10; i ++) {
    document.getElementById('p6').innerHTML += '반복' + i + "<br>";
}

// for (var i = 1; i <= 10; i ++) {
//     document.write("반복" + i, "<br>");
// }

//sec7
for (var i = 1; i <=100; i ++) {
    if (i % 5 == 0 && i % 7 != 0) {
        document.getElementById('p7').innerHTML += "<span class = 'red'> - " + i + " - </span>" ;
    }else if (i % 7 == 0 && i % 5 != 0) {
        document.getElementById('p7').innerHTML += "<span class = 'green'> - " + i + " - </span>";
    }else if (i % 7 == 0 && i % 5 == 0) {
        document.getElementById('p7').innerHTML += "<span class = 'aqua'> - " + i + " -</span>";
    }
}

// for (var i = 1; i <=100; i ++) {
//     if (i % 5 == 0 && i % 7 != 0) {
//         document.write("<p class = 'red'>" + i + "</p>");
//     }else if (i % 7 == 0 && i % 5 != 0) {
//         document.write("<p class = 'green'>" + i + "</p>");
//     }else if (i % 7 == 0 && i % 5 == 0) {
//         document.write("<p class = 'aqua'>" + i + "</p>");
//     }
// }

//sec8
for (var i = 1; i <= 10; i ++) {
    if (i == 6)break;
    document.getElementById('p8').innerHTML += i + "<br>"; 
} document.getElementById('p8').innerHTML += "=====The end====="; 

// for (var i = 1; i <= 10; i ++) {
//     if (i == 6)break;
//     document.write(i + "<br>");
// } document.write("=====The end=====");

//sec9
for (var i = 1; i <= 10; i ++) {
    if(i % 2 == 0) continue
    document.getElementById('p9').innerHTML += i + "<br>";
} document.getElementById('p9').innerHTML += ("=====The end=====");

// for (var i = 1; i <= 10; i ++) {
//     if(i % 2 == 0) continue
//     document.write(i + "<br>");
// } document.write("=====The end=====");

//sec10
for (var i = 1; i <=3; i ++) {
    for (var k = 1; k <= 2; k ++) {
        document.getElementById('p10').innerHTML += i + '행' + k + '열' + "<br>";
    }
    document.getElementById('p10').innerHTML += "<br>";
}

// for (var i = 1; i <=3; i ++) {
//     for (var k = 1; k <= 2; k ++) {
//         document.write(i + '행' + k + '열', "<br>");
//     }
//     document.write("<br>")
// }

//sec11
var i = 1;
while (i < 10) {
    document.getElementById('p11').innerHTML += "5X" + i + "=" + i*5 + "<br>";
    i++;
}

// var i = 1;
// while (i < 10) {
//     document.write("5X" + i + "=" + i*5 + "<br>");
//     i++;
// }

//sec12
var num = 1;
var t = "<table border = 1>";
for (var i = 1; i <= 5; i ++) {
    t += "<tr>"
    for (var k = 1; k <= 5; k ++) {
        t += "<td>" + num + "</td>";
        num ++;
    }

    t += "</tr>";
}
t += "</table>";
console.log(t);
document.getElementById('p12').innerHTML = t;

// var num = 1;
// var t = "<table border = 1>";
// for (var i = 1; i <= 5; i ++) {
//     t += "<tr>"
//     for (var k = 1; k <= 5; k ++) {
//         t += "<td>" + num + "</td>";
//         num ++;
//     }

//     t += "</tr>";
// }
// t += "</table>";
// console.log(t);
// document.write(t);

//sec13
for (i = 3; i < 6; i ++) {
    for (j = 1; j < 10; j++) {
        document.getElementById('p13').innerHTML += i + "X" + j + "=" + i*j + "<br>";
    }
    document.getElementById('p13').innerHTML += '<br>'
}

//sec14
for (i = 3; i < 6; i ++) {
    for (j = 1; j < 10; j++) {
        if (i == 4 && j == 3) break;
        if (i == 5 && j == 3) continue;
        document.getElementById('p14').innerHTML += i + "X" + j + "=" + i*j + "<br>"; 
    } 
    document.getElementById('p14').innerHTML += '<br>'
}