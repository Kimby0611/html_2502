//sec1
document.getElementById('p1').innerHTML = document.getElementById('h11').innerHTML;

//sec2
document.getElementById('p2').innerHTML = document.getElementById('h12').firstChild.nodeValue;

//sec3
document.getElementById('p3').innerHTML = document.getElementById('h13').childNodes[0].nodeValue;

//sec4
document.getElementById('demo4').innerHTML = '<span class = "red">' + document.getElementById('sec4').innerHTML + '</span>';

//sec5
//document.getElementById('demo5').innerHTML = document.documentElement.innerHTML;

//sec6
document.getElementById('p6').innerHTML = document.getElementById('h16').nodeName;

//sec7
document.getElementById('p7').innerHTML = document.getElementById('h17').nodeType;

//sec8
const para8 = document.createElement("p");
const node8 = document.createTextNode('<추가>This is new');
para8.appendChild(node8);
const element8 = document.getElementById('div8');
element8.appendChild(para8);
para8.classList.add('red');

//sec9
const para9 = document.createElement('p');
const node9 = document.createTextNode("<추가>This is new.");
para9.appendChild(node9);
const element9 = document.getElementById('div9');
const child9 = document.getElementById('p9_1');
element9.insertBefore(para9, child9);
para9.classList.add('red');

//sec10
function btn10 () {
    document.getElementById('p10_1').remove();
}

//sec11
const parent11 = document.getElementById('div11');
const child11 = document.getElementById('p11_1');
const para11 = document.createElement('p');
const node11 = document.createTextNode('<수정>This is new');
para11.appendChild(node11);
parent11.replaceChild(para11, child11);

//sec12
const sec12 = document.getElementById('sec12');
const myCollection12 = sec12.getElementsByTagName('p');
document.getElementById('demo12').innerHTML = "The innerHTML of the second paragraph is: " + "<span class = 'red'>" + myCollection12[1].innerHTML + "</span>";

//sec13
const sec13 = document.getElementById('sec13');
const myCollection13 = sec13.getElementsByTagName('p');
document.getElementById('demo13').innerHTML = "This document contains " + "<span class = 'red'>" + myCollection13.length  + "</span>" + " paragraphs";

//sec14
function btn14 () {
    const sec14 = document.getElementById('sec14');
    const myCollection14 = sec14.getElementsByTagName('p');
    for (let i = 0; i < myCollection14.length; i++) {
        myCollection14[i].style.color = 'red';
    }
}

//sec15
const sec15 = document.getElementById('sec15');
const myNodelist15 = sec15.querySelectorAll("p");
document.getElementById("demo15").innerHTML = "The innerHTML of the second paragraph is: " + "<span class = 'red'>" + myNodelist15[1].innerHTML + "</span>" ;

//sec16
const sec16 = document.getElementById('sec16');
const myNodelist16 = sec16.querySelectorAll("p");
document.getElementById("demo16").innerHTML = "This document contains " + "<span class = 'red'>" + myNodelist16.length + "</span>" + " paragraphs";

//sec17
function btn17 () {
    const sec17 = document.getElementById('sec17');
    const myNodelist17 = sec17.querySelectorAll('p');
    for (let i = 0; i < myNodelist17.length; i++) {
        myNodelist17[i].style.color = "red";
    }
}

//sec18
document.getElementById('demo18').innerHTML = "Browser inner window width: " + '<span class = "red">' + window.innerWidth + '</span>' + " px<br>" +
"Browser inner window height: " +  '<span class = "red">' + window.innerHeight + '</span>' + " px" + "<br>" +
"Browser outer window height: " +  '<span class = "red">' + window.outerWidth + '</span>' + " px" + "<br>" + 
"Browser outer window height: " +  '<span class = "red">' + window.outerHeight + '</span>' + " px";

//sec19
document.getElementById("demo19").innerHTML = "Screen width is " + '<span class = "red">' + screen.width + '</span>';

//sec20
document.getElementById("demo20").innerHTML = "Screen height is " + '<span class = "red">' + screen.height + '</span>';

//sec21
document.getElementById("demo21").innerHTML = "Available screen width is " + '<span class = "red">' + screen.availWidth + '</span>';

//sec22
document.getElementById("demo22").innerHTML = "Available screen height is " + '<span class = "red">' + screen.availHeight + '</span>';

//sec23
document.getElementById("demo23").innerHTML = "Screen color depth is " + '<span class = "red">' + screen.colorDepth + '</span>';

//sec24
document.getElementById("demo24").innerHTML = "Screen color pixel depth is " + '<span class = "red">' + screen.pixelDepth + '</span>';