//sec1
function btn1() {
    var username = prompt("당신의 영문 이름은?", "");
    var upperName = username.toUpperCase();    

    var userNum = prompt("당신의 연락처는?", "");
    var result1 = userNum.substring(0, userNum.length - 4) + "****";

    document.getElementById("p1").innerHTML = upperName + '<br>';
    document.getElementById("p1").innerHTML += result1;
}

//sec2
function btn2() {
    var userEmail = prompt("당신의 이메일 주소는?", "");
    var arrUrl = ['.co.kr', '.com', '.net', '.or.kr', 'go.kr'];

    var check1 = false;
    var check2 = false;

    if (userEmail.indexOf("@") > 0) {check1 = true};
    for (var i = 0; i < arrUrl.length; i ++) {
        if(userEmail.indexOf(arrUrl[i]) > 0) {
            check2 = true;
        }
    }
    if(check1 && check2) {
        document.getElementById('p2').innerHTML = userEmail;
    } else {
        document.getElementById('p2').innerHTML = '이메일 형식이 잘못되었습니다.';
    }
}