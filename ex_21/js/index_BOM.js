//변수 선언
const demo1 = document.querySelector('#sec1 .demo');
const demo2 = document.querySelector('#sec2 .demo');
const demo3 = document.querySelector('#sec3 .demo');
const demo4 = document.querySelector('#sec4 .demo');
const demo5 = document.querySelector('#sec5 .demo');
const demo6 = document.querySelector('#sec6 .demo');
const demo7 = document.querySelector('#sec7 .demo');
const demo8 = document.querySelector('#sec8 .demo');
const demo9 = document.querySelector('#sec9 .demo');
const demo10 = document.querySelector('#sec10 .demo');
const demo11 = document.querySelector('#sec11 .demo');
const demo12 = document.querySelector('#sec12 .demo');
const demo13 = document.querySelector('#sec13 .demo');
const demo14 = document.querySelector('#sec14 .demo');
const demo15 = document.querySelector('#sec15 .demo');
const demo16 = document.querySelector('#sec16 .demo');
const demo17 = document.querySelector('#sec17 .demo');
const demo18 = document.querySelector('#sec18 .demo');
const demo19 = document.querySelector('#sec19 .demo');
const demo20 = document.querySelector('#sec20 .demo');
var br = '<br>';

//sec1
demo1.innerHTML = 'The full URL of this page is: ' + br + '<span class = "red">' + window.location.href + '<span>';

//sec2
demo2.innerHTML = 'Page hostname is: ' + '<span class = "red">' + window.location.hostname + '<span>';

//sec3
demo3.innerHTML = "Page path is: " + '<span class = "red">' + window.location.pathname + '<span>';

//sec4
demo4.innerHTML = "The page protocol is: " + '<span class = "red">' + window.location.protocol + '<span>';

//sec5
demo5.innerHTML = 'The URL port number of the current pate is: ' + '<span class = "red">' + window.location.port + '<span>';

//sec6
function newDoc () {
    //window.location.assign("https://www.w3schools.com/js/js_window_location.asp");
    window.open("https://www.w3schools.com/js/js_window_location.asp", "_blank");
}

//sec7
function goBack () {
    window.history.back()
}
function goForward () {
    window.history.forward()
}

//sec8
demo8.innerHTML = "navigator.cookieEnabled is: " + '<span class = "red">' + navigator.cookieEnabled + '<span>';

//sec9
demo9.innerHTML = "navigator.appName is: " + '<span class = "red">' + navigator.appName + '<span>';

//sec10
demo10.innerHTML = "navigator.appCodeName is " +'<span class = "red">' + navigator.appCodeName + '</span>';

//sec11
demo11.innerHTML = "navigator.product is " + '<span class = "red">' +navigator.product + '</span>';

//sec12
demo12.innerHTML = '<span class = "red">' +navigator.appVersion + '</span>';

//sec13
demo13.innerHTML = '<span class = "red">' +navigator.userAgent + '</span>';

//sec14
demo14.innerHTML = "navigator.platform is " + '<span class = "red">' +navigator.platform + '</span>';

//sec15
demo15.innerHTML = "navigator.language is " + '<span class = "red">' +navigator.language + '</span>';

//sec16
demo16.innerHTML = "navigator.onLine is " + '<span class = "red">' +navigator.onLine + '</span>';

//sec17
demo17.innerHTML ="javaEnabled is " + '<span class = "red">' +navigator.javaEnabled() + '</span>';

//sec18
function btn18() {
    alert("I am an alert box!")
}

//sec19
function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo19").innerHTML = txt;
  }