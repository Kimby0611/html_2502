//sec1
const element1 = document.getElementById("intro");
document.getElementById("demo1").innerHTML = 'The text from the intro paragraph is: ' + element1.innerHTML;

//sec2
const element2 = document.getElementsByTagName("p");
document.getElementById("demo2").
innerHTML = 'The text in first paragraph (index 0) is: '
+ element2[3].innerHTML;

//sec3
const x3 = document.getElementById('sec3');
const y3 = x3.getElementsByTagName("p");
document.getElementById("demo3").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y3[0].innerHTML;

//sec4
const x4 = document.getElementsByClassName("intro4");
document.getElementById("demo4").innerHTML = 'The first paragraph (index 0) with class: ' + x4[0].innerHTML;

//sec5
const x5 = document.querySelectorAll('p.intro5');
document.getElementById("demo5").innerHTML = 'The first paragraph (index 0) with class: ' + x5[0].innerHTML;

//sec6
const x6 = document.forms['frm1'];
let text = "";
for (let i = 0; i < x6.length; i++) {
    text += x6.elements[i].value + "<br>";
}
document.getElementById("demo6").innerHTML = text;

//sec7
document.getElementById("p7").innerHTML = "New text!"

//sec8
const element8 = document.getElementById("id01");
element8.innerHTML = "New Heading";

//sec9
document.getElementById("image9").src = "https://www.w3schools.com/js/landscape.jpg"

//sec10
document.getElementById("demo10").innerHTML = "Date: " + Date();

//sec11