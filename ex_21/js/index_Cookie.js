//sec26
function readCookie() {
    var x = document.cookie;
    alert(x);
}
function makeCookie () {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
//쿠키 날짜를 오늘 이후로 해야 생성됨
    document.cookie = "username=John Smith; expires=" + d.toUTCString() + "; path=/";
}
function removeCookie () {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    //쿠키 날짜를 과거로 지정하면 삭제됨
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//앞에서부터 이름, 값, 유효기간
function setCookie(cname,cvalue,exdays) {
    //오늘 날짜 기준
    const d = new Date();
    //하루 뒤 만료
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //만료 문자열
    let expires = "expires=" + d.toUTCString();
    //쿠키 설정
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}