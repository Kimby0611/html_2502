//sec1
function validateForm1() {
    let x1 = document.forms["myForm1"]["fname1"].value;
    if (x1 == "") {
        alert("Name must be filled out");
        return false;
    }
}

//sec2
function myFunction1 () {
    let x2 = document.getElementById("numb2").value;
    let text;
    if (isNaN(x2) || x2 < 1 || x2 > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById('demo2').innerHTML = text;
}

//sec4
document.getElementById('p4_2').style.color = 'blue';
document.getElementById('p4_2').style.fontFamily = 'Arial';
document.getElementById('p4_2').style.fontSize = 'larger';

//sec5
function btn5 () {
document.getElementById('id5').style.color = 'red';
}

//sec7
function sec7 (id) {
    id.innerHTML = "Ooops!";
}

//sec8
function displayDate8() {
    document.getElementById('demo8').innerHTML = Date();
        
    let today = new Date();
    let srt = 
    today.getFullYear() +
    "년" +
    today.getMonth() +
    "월" + 
    today.getDate() +
    "일" +
    today.getHours() + 
    "시" + 
    today.getMinutes()+
    "분" + 
    today.getSeconds() + 
    "초";
    document.getElementById("demo8_1").innerHTML = srt;
}

//sec9
document.getElementById("myBtn9").onclick = displayDate9;
function displayDate9() {
    document.getElementById("demo9").innerHTML = Date();
}

//sec10
function checkCookies () {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById('demo10').innerHTML = text;
}

//sec11
function upperCase11() {
    const x11 = document.getElementById("fname11");
    x11.value = x11.value.toUpperCase();
}

//sec12
function upperCase12 () {
    const x12 = document.getElementById("fname12");
    x12.value = x12.value.toUpperCase();
}

//sec13
function mOver13 (obj13) {
    obj13.innerHTML = "Thank You";
}
function mOut13 (obj13) {
    obj13.innerHTML = "Mouse Over Me";
}

//sec14
function mDown14 (obj14) {
    obj14.style.backgroundColor = "#1ec5e5";
    obj14.innerHTML = 'Release Me';
}
function mUp14 (obj14) {
    obj14.style.backgroundColor = "#D94A38";
    obj14.innerHTML = "Thank You";
}