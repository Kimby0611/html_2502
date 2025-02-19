//sec1
// var walkAmount = prompt('당신의 하루 걷는 양은 몇 보인가요?');
// if (walkAmount >= 10000) {
//     document.getElementById('p1_1').innerHTML = "매우 좋은 습관을 지니고 계시는군요<br>";
//     document.write('좋은 습관을 지니고 계시는군요<br>');
// } 
// document.getElementById('p1_2').innerHTML = "========= The end =========";
// document.write('============The end===========');

document.getElementById('p1').innerHTML = '당신의 하루 걷는 양은 몇 보인가요?';
function check1() {
    var walkAmount = document.getElementById("inp1").value;
    if (walkAmount >= 10000) {
        document.getElementById('p1_1').innerHTML = "매우 좋은 습관을 지니고 계시는군요<br>";
    } 
    document.getElementById('p1_2').innerHTML = "========= The end =========";
}

//sec2
// var min = prompt('당신의 하루 통화량은 몇 분인가요?', "0");
// if (min >= 60) {
//     document.getElementById('p2_1').innerHTML = '많이 사용하는 편이네요 <br>';
//     document.write('많이 사용하는 편이네요 <br>')
// }
// document.getElementById('p2_2').innerHTML = "========= The end =========";
// document.write ("========= The end =========")


document.getElementById('p2').innerHTML = '당신의 하루 통화량은 몇 분인가요?';
function check2 () {
    var min = document.getElementById('inp2').value;
    if (min >= 60) {
        document.getElementById('p2_1').innerHTML = '많이 사용하는 편이네요 <br>';
    }
    document.getElementById('p2_2').innerHTML = "========= The end =========";
}

//sec3
// var username = prompt('방문자의 이름은?');
// if (username) {
//     document.getElementById('p3_1').innerHTML = username + '님 반갑습니다! 방문을 환영합니다.';
//     document.write(username + '님 반갑습니다! 방문을 환영합니다.')
// }

document.getElementById('p3').innerHTML = '방문자의 이름은?';
function check3 () {
    var username = document.getElementById('inp3').value;
    if (username) {
        document.getElementById('p3_1').innerHTML = username + '님 반갑습니다! 방문을 환영합니다.';
    }
}

//sec4
// var num = prompt('당신이 좋아하는 숫자는?', "0")
// if (num % 2 == 0) {
//     document.getElementById('p4_1').innerHTML = '당신이 좋아하는 숫자는 짝수입니다.';
//     document.write('당신이 좋아하는 숫자는 짝수입니다.')
// }else{
//     document.getElementById('p4_1').innerHTML = '당신이 좋아하는 숫자는 홀수입니다.';
//     document.write('당신이 좋아하는 숫자는 홀수입니다.')
// }

document.getElementById('p4').innerHTML = '당신이 좋아하는 숫자는?';
function check4 () {
    var num = document.getElementById('inp4').value;
    if (num % 2 == 0) {
        document.getElementById('p4_1').innerHTML = '당신이 좋아하는 숫자는 짝수입니다.';
    }else{
        document.getElementById('p4_1').innerHTML = '당신이 좋아하는 숫자는 홀수입니다.';
    }
}

//sec5
document.getElementById('p5').innerHTML = '정말로 회원님을 탈퇴하시겠습니까?';
function check5 () {
    var btn = event.target.id;
    if (btn === 'yes') {
        document.getElementById('p5_1').innerHTML = '탈퇴 처리되었습니다.';
    }else{
        document.getElementById('p5_1').innerHTML = '탈퇴 취소되었습니다.';
    }
}

// var result = confirm("정말로 회원님을 탈퇴하시겠습니까?");
// if (result) {
//     document.write ('탈퇴 취소되었습니다.');
//     document.getElementById('p5').innerHTML = '탈퇴 처리되었습니다.';
// } else {
//     document.write ('탈퇴 취소되었습니다.');
//     document.getElementById('p5').innerHTML = '탈퇴 취소되었습니다.';
// }

//sec6
document.getElementById('p6').innerHTML = '현재는 몇 월입니까?';

function btn6 () {
    var mon = document.getElementById('inp6').value;
    if (mon >= 9 && mon <= 11) {
        //document.write('독서의 계절 가을이네요!!');
        document.getElementById('p6_1').innerHTML = '독서의 계절 가을이네요!!';
    }else if (mon >= 6 && mon <= 8) {
        //document.write('여행가기 좋은 여름이네요!!');
        document.getElementById('p6_1').innerHTML = '여행가기 좋은 여름이네요!!';
    }else if (mon >= 3 && mon <= 5) {
        //document.write('햇살 가득한 봄이네요!!');
        document.getElementById('p6_1').innerHTML = '햇살 가득한 봄이네요!!';
    }else if (mon == 12 || mon >= 1 && mon <= 2) {
        //document.write('스키의 계절 겨울이네요!!');
        document.getElementById('p6_1').innerHTML = '스키의 계절 겨울이네요!!';
    }else {
        // document.write('잘못된 입력입니다.');
        document.getElementById('p6_1').innerHTML = '잘못된 입력입니다.';
    }
}


// var mon = prompt('현재는 몇 월입니까?', '0');
// if (mon >= 9 && mon <= 11) {
//     //document.write('독서의 계절 가을이네요!!');
//     document.getElementById('p6').innerHTML = '독서의 계절 가을이네요!!';
// }else if (mon >= 6 && mon <= 8) {
//     //document.write('여행가기 좋은 여름이네요!!');
//     document.getElementById('p6').innerHTML = '여행가기 좋은 여름이네요!!';
// }else if (mon >= 3 && mon <= 5) {
//     //document.write('햇살 가득한 봄이네요!!');
//     document.getElementById('p6').innerHTML = '햇살 가득한 봄이네요!!';
// }else if (mon == 12 || mon >= 1 && mon <= 2) {
//     //document.write('스키의 계절 겨울이네요!!');
//     document.getElementById('p6').innerHTML = '스키의 계절 겨울이네요!!';
// }
// else {
//    // document.write('잘못된 입력입니다.');
//     document.getElementById('p6').innerHTML = '잘못된 입력입니다.';
// }

//sec7
var id = "qweqwe";
var pw = "123123";

function btn7 () {
    var user_id = document.getElementById('id').value;
    var user_pw = document.getElementById('pw').value;
    
    if (id == user_id) {
        if (pw == user_pw) {
           //document.write(user_id + '님 반갑습니다.')
            document.getElementById('p7').innerHTML = user_id + '님 반갑습니다.';
        } else {
            alert("비밀번호가 일치하지 않습니다.");
            location.reload();
        }
    } else {
        alert('아이디가 일치하지 않습니다.');
        location.reload();
    }
}


// var user_id = prompt("아이디는?", "");
// var user_pw = prompt("비밀번호는?", "");

// if (id == user_id) {
//     if (pw == user_pw) {
//        //document.write(user_id + '님 반갑습니다.')
//         document.getElementById('p7').innerHTML = user_id + '님 반갑습니다.';
//     } else {
//         alert("비밀번호가 일치하지 않습니다.");
//         location.reload();
//     }
// } else {
//     alert('아이디가 일치하지 않습니다.');
//     location.reload();
// }

//sec8
let num2 = 10;
let user = "홍길동";

if (num2 > 5) {
    let num2 = 50;
    num2 = num2 + 10;
}
//document.write(`${num} <br>`);
document.getElementById('p8_1').innerHTML = `${num2} <br>`
if (user != "") {
    user = '김길동'
}
//document.write(`${user}<br>`);
document.getElementById('p8_2').innerHTML = `${user} <br>`

//sec9
document.getElementById('p9').innerHTML = '네이버, 다음 , 네이트, 구글 중 \ 즐겨 사용하는 포털 검색 사이트는?'

function btn9 () {
    var site = document.getElementById('inp9').value;
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
        default: alert("보기 중에 없는 사이트입니다.")
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
// if(url) {
//     window.open('http://' + url, '_blank');
// }
// //if(url) location.href = 'http://' + url;

//sec10
var i = 1;
while(i <= 10) {
    //document.write("안녕하세요" + i, "<br>");
    document.getElementById('p10').innerHTML += '안녕하세요' + i + '<br>';
    i ++;
}
//document.write("===========The end==========")
document.getElementById('p11').innerHTML = '==========The end========='