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
    //name = 'cname='
    let name = cname + "=";
    //cookie값을 디코딩함
    let decodedCookie = decodeURIComponent(document.cookie);
    //세미콜론으로 쿠키를 배열로 분리
    let ca = decodedCookie.split(';');
    //각 쿠기 문자열을 하나씩 처리
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        //공백 제거
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        //찾고자 하는 쿠키인지 확인
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    //찾치 못하면 빈 문자열 반환
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