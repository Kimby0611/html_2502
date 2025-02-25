//sec1
document.getElementById("mybtn1").addEventListener("click", displayDate);
function displayDate () {
    document.getElementById("demo1").innerHTML = Date();
    document.getElementById("demo1").style = "color: blue; font-weight: bold;"
}

//sec2
document.getElementById("mybtn2").addEventListener("click", function () {
    alert("Hello World!")
});

//sec3
document.getElementById('mybtn3').addEventListener("click", myFunction3);
function myFunction3() {
    alert("Hello World");
}

//sec4
var x = document.getElementById("mybtn4");
x.addEventListener("click", myFunction4);
x.addEventListener("click", someOtherFunction4);
function myFunction4 () {
    alert("Hello World");
};
function someOtherFunction4 () {
    alert("This function was also executed!")
};

//sec5
var x5 = document.getElementById("mybtn5");
x5.addEventListener("click", clickFunc);
x5.addEventListener("mouseover", mouseoverFunc);
x5.addEventListener("mouseout", mouseoutFunc);
function clickFunc () {
    document.getElementById('demo5').innerHTML += 'clicked!<br>';
}
function mouseoverFunc () {
    document.getElementById("demo5").innerHTML += 'moused over!<br>';
}
function mouseoutFunc () {
    document.getElementById("demo5").innerHTML += 'mouse out!<br>';
}

//sec6
window.addEventListener("resize", function(){
    document.getElementById("demo6").innerHTML = Math.random();
});

//sec7
let p1 = 5;
let p2 = 7;
document.getElementById("mybtn7").addEventListener("click", function () 
{
    myFunction7(p1, p2);
});
function myFunction7(a, b) {
    document.getElementById("demo7").innerHTML = a * b;
    document.getElementById("demo7").style = 'color:blue; font-weight: bold;'
}

//sec8
document.getElementById("myP1").addEventListener("click", function () {
    alert("You clicked the white element!");
}, false);
document.getElementById("div8_1").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
}, true);
document.getElementById("div8_2").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, true);

//sec9
document.getElementById('div9').addEventListener('mousemove', myFunction9);
function myFunction9 () {
    document.getElementById("demo9").innerHTML = Math.random();
    document.getElementById("demo9").innerHTML +='<br>addEventListener()메서드가 활성화 되었습니다.'
}
function removeHandler () {
    document.getElementById('div9').removeEventListener('mousemove', myFunction9);
    let randomNumber = document.getElementById('demo9').innerHTML.split("<br>")[0];
    console.log(randomNumber);
    document.getElementById("demo9").innerHTML = randomNumber + '<br>addEventListener()메서드가 제거되었습니다.';
}

//sec10
function myFunction10 () {
    const x10 = document.getElementById('fname10');
    x10.value = x10.value.toUpperCase();
}

//sec11
function myFunction11 () {
    const x11 = document.getElementById('fname11');
    x11.value = x11.value.toUpperCase();
}