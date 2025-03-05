//sec1
function sumFnc_1(num1, num2) {
    return num1 + num2;
}
document.getElementById("p1").innerHTML = sumFnc_1(1,2) + '<br>';
console.log(sumFnc_1(1, 2));
const sumFnc_2 = (num1, num2) => num1 + num2;
document.getElementById("p1").innerHTML += sumFnc_2(10, 20) + "<br>";
console.log(sumFnc_2(10, 20));
const sumFnc_3 = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
document.getElementById("p1").innerHTML += sumFnc_3(100, 200) + "<br>";
console.log(sumFnc_3(100, 200));
const infoFnc_1 = function(info1, info2) {
    return {"name" : info1, "age" : info2};
}
document.getElementById("p1").innerHTML += JSON.stringify(infoFnc_1("홍길동", 22)) + "<br>";
console.log(infoFnc_1("홍길동", 22));
const infoFnc_2 = (info1, info2) => ({"name" : info1, "age" : info2});
document.getElementById("p1").innerHTML += JSON.stringify(infoFnc_2("최군", 32));
console.log(infoFnc_1("최군", 32));

//sec2
const obj_1 = {
    name: "홍길동",
    infoFnc: function() {
        console.log(this);  //Object(obj_1)
        const innerFnc = () => {
            document.getElementById("p2").innerHTML += "일반 함수 메서드에 함수: " + JSON.stringify(this);
            console.log("일반 함수 메서드에 함수: ", this);
        }
        innerFnc();
    }
};
obj_1.infoFnc();

const obj_2 = {
    name: "홍대리",
    infoFnc: () => {
        console.log(this);   //window
        const innerFnc = () => {
            document.getElementById("p2").innerHTML += "화살표 함수 메서드에 함수: " + this;
            console.log("화살표 함수 메서드에 함수: ", this);
        }
        innerFnc(); 
    }
};
obj_2.infoFnc();

const btn2_1 = document.querySelector(".btn-2_1");
const btn2_2 = document.querySelector('.btn-2_2');

btn2_1.addEventListener("click", function () {
    document.getElementById("p2").innerHTML = this;
    console.log(this);
});
btn2_2.addEventListener("click", () => {
    document.getElementById("p2").innerHTML = this;
    console.log(this);
});

//sec3
import { fncA, fncB, msg } from "./module_1.js";
import { fncC, fncD } from "./module_2.js";
import fncE from "./module_3.js";
fncA();
fncB();
console.log(msg);
fncC();
fncD();
fncE();

//sec4
//module 타입에서는 전역으로 선언되지 않아 onclick을 못찾는 에러 발생 >> 
//이벤트리스너로 넣어준다
const btn4 = document.getElementById('btn4').addEventListener('click', function() {
    var arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
    var arrNum = Math.floor((Math.random() * arrColor.length));
    var secTag = document.getElementById('sec4');
    console.log(arrColor, arrNum, secTag)
    secTag.style.backgroundColor = arrColor[arrNum];
});

//window.btn4로 변수 직접 선언
// function btn4 () {
//     var arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
//     var arrNum = Math.floor((Math.random() * arrColor.length));
//     var secTag = document.getElementById('sec4');
//     console.log(arrColor, arrNum, secTag)
//     secTag
//     .style.backgroundColor = arrColor[arrNum];
// }
// window.btn4 = btn4;


//sec5
function TestScore (name, kor, eng) {
    this.userName = name;
    this.korNum = kor;
    this.engNum = eng;

    TestScore.prototype.getTestInfo = function () {
        document.getElementById("p5").innerHTML += `이름 ${name}, <br>`;
        document.getElementById("p5").innerHTML += `국어: ${kor}, <br>`;
        document.getElementById("p5").innerHTML += `영어: ${eng} <br>`;
    }
    TestScore.prototype.getAvg = function () {
        return (this.korNum + this.engNum) / 2
    }
}
var kimgun = new TestScore("김군", 80, 90);
var ohgun = new TestScore("오군", 100, 80);

kimgun.getTestInfo();
document.getElementById('p5').innerHTML += `평균 점수: ${kimgun.getAvg()} <br><br> <hr>`;

ohgun.getTestInfo();
document.getElementById('p5').innerHTML += `평균 점수: ${ohgun.getAvg()} <br><br>`;