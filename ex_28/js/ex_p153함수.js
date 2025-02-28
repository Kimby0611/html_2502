//sec1
var count1 = 0;
myFnc1();
function myFnc1 () {
    count1 ++;
    document.getElementById("p1").innerHTML += "Hello!" + count1+ '<br>';
}
myFnc1();
var theFnc = function () {
    count1 ++;
    document.getElementById("p1").innerHTML += "bye!" + count1 + "<br>";
}
theFnc();

//sec2
var color2=["white", "yellow", "aqua", "purple"];
      
var i=0;
function btn2() {
  i++;
  if(i >= color2.length) {
    i = 0;
  }

  var bodyTag = document.getElementById("sec2");
  bodyTag.style.backgroundColor = color2[i];
}

//sec3
function myFnc3 (name, area) {
    document.getElementById("p3").innerHTML += `안녕하세요 ${name}입니다.<br>`;
    document.getElementById("p3").innerHTML += `사는곳은 ${area}입니다.<br><br>`;
}
myFnc3("홍당무", "서울");
myFnc3("깍두기", "부산");

//sec4
var rightId = "korea";
var rightPw = "1234";
function login (id, pw) {
    if (id == rightId) {
        if (pw == rightPw) {
            document.getElementById("p4").innerHTML = `${id}님 방문을 환영합니다^~^`;
        }else {
            alert("비밀번호가 틀렸습니다.")
        }
    }else {
        alert("없는 아이디 입니다.")
    } 
}
function btn4 () {
    var userId = document.getElementById("userInp").value;
    var userPw = document.getElementById("userPw").value;
    login(userId, userPw);
}

//sec5
function avgbtn () {
    function testAvg(arrData) {
        var sum = 0;
        for (var i = 0; i <arrData.length; i++) {
            sum += Number(prompt(arrData[i], "점수는?", "0"));
        }
        var avg = sum/arrData.length;
        return avg;
    }
    var arrSubject = ['국어', '수학'];
    var result = testAvg(arrSubject);
    document.getElementById("p5").innerHTML = "평균 점수는" + result + "점입니다."
}

//sec6
var num = 1;
function gallery (direct) {
    if (direct) {
        if (num == 3) return;
        num ++;
    }else {
        if (num == 1) return;
        num --;
    }
    var imgTag = document.getElementById('photo');
    imgTag.setAttribute("src", "images/math_img_" + num + ".jpg");
}

//sec7
var num = 0;
function testFnc () {
    num ++;
    document.getElementById('p7').innerHTML += '<span> ' + num  + '</span>';
    if (num == 10) return;
    testFnc();
}
testFnc();

//sec8
var num = 100;
function menu () {
    num += 100;
    document.getElementById("p8").innerHTML = num;
}
menu();
// function menu () {
//     document.getElementById("p8").innerHTML = num;
// }

//sec9
(function () {
    var num = 100;
    function menu () {
        num += 100;
        document.getElementById('p9').innerHTML = num;
    }
    menu();
}());
(function () {
    var num = 100;
    function menu() {
        document.getElementById('p9').innerHTML = num;
    }
}());

//sec10
function CheckWeight(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;

    this.getInfo = function () {
        var str = "";
        str += "이름: " + this.userName + ", ";
        str += "키: " + this.userHeight + ", ";
        str += "몸무게: " + this.userWeight + "<br>";
        return str;
    }

    this.getResult = function () {
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
        if (this.userWeight < this.maxWeight && this.userWeight > this.minWeight) {
            return '정상 몸무게 입니다.';
        } else if (this.userWeight < this.minWeight) {
            return "몸무게 미달입니다"
        } else {
            return "몸무게 초과입니다."
        }
    }
}
var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박달재", 180, 88);
document.getElementById("p10").innerHTML = jang.getInfo();
document.getElementById("p10").innerHTML += JSON.stringify(jang) + "<br>";
document.getElementById("p10").innerHTML += jang.getResult() + "<hr>";

document.getElementById("p10").innerHTML += park.getInfo();
document.getElementById("p10").innerHTML += JSON.stringify(park) + "<br>";
document.getElementById("p10").innerHTML += park.getResult();

//sec11
function CheckWeight2(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;

    CheckWeight2.prototype.getInfo = function () {
        var str = "";
        str += "이름: " + this.userName + ", ";
        str += "키: " + this.userHeight + ", ";
        str += "몸무게: " + this.userWeight + "<br>";
        return str;
    }

    CheckWeight2.prototype.getResult = function () {
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
        if (this.userWeight < this.maxWeight && this.userWeight > this.minWeight) {
            return '정상 몸무게 입니다.';
        } else if (this.userWeight < this.minWeight) {
            return "몸무게 미달입니다"
        } else {
            return "몸무게 초과입니다."
        }
    }
}
var jang2 = new CheckWeight2("장보리", 168, 62);
var park2 = new CheckWeight2("박달재", 180, 88);
document.getElementById("p11").innerHTML = jang2.getInfo();
document.getElementById("p11").innerHTML += JSON.stringify(jang2) + "<br>";
document.getElementById("p11").innerHTML += jang2.getResult() + "<hr>";

document.getElementById("p11").innerHTML += park2.getInfo();
document.getElementById("p11").innerHTML += JSON.stringify(park2) + "<br>";
document.getElementById("p11").innerHTML += park2.getResult() + "<hr>";
document.getElementById("p11").innerHTML += jang2.getResult == park2.getResult;

//sec12
function sumFnc_1(num1, num2) {
    return num1 + num2;
}
document.getElementById("p12").innerHTML = sumFnc_1(1,2) + '<br>';
const sumFnc_2 = (num1, num2) => num1 + num2;
document.getElementById("p12").innerHTML += sumFnc_2(10, 20) + "<br>";
const sumFnc_3 = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
document.getElementById("p12").innerHTML += sumFnc_3(100, 200) + "<br>";
const infoFnc_1 = function(info1, info2) {
    return {"name" : info1, "age" : info2};
}
document.getElementById("p12").innerHTML += JSON.stringify(infoFnc_1("홍길동", 22)) + "<br>";
const infoFnc_2 = (info1, info2) => ({"name" : info1, "age" : info2});
document.getElementById("p12").innerHTML += JSON.stringify(infoFnc_2("최군", 32));

//sec13
const obj_1 = {
    name: "홍길동",
    infoFnc: function() {
        console.log(this);  //Object(obj_1)
        const innerFnc = () => {
            document.getElementById("p13").innerHTML += "일반 함수 메서드에 함수: " + JSON.stringify(this);
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
            document.getElementById("p13").innerHTML += "화살표 함수 메서드에 함수: " + this;
            console.log("화살표 함수 메서드에 함수: ", this);
        }
        innerFnc(); 
    }
};
obj_2.infoFnc();

const btn13_1 = document.querySelector(".btn-1");
const btn13_2 = document.querySelector('.btn-2');

btn13_1.addEventListener("click", function () {
    document.getElementById("p13").innerHTML = this;
    console.log(this);
});
btn13_2.addEventListener("click", () => {
    document.getElementById("p13").innerHTML = this;
    console.log(this);
});

//sec14
// import { fncA, fncB, msg } from "./module_1.js";
// import { fncC, fncD } from "./module_2.js";
// import fncE from "./module_3.js";
// fncA();
// fncB();
// console.log(msg);
// fncC();
// fncD();
// fncE();

//sec15
function btn15 () {
    var arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
    var arrNum = Math.floor((Math.random() * arrColor.length));
    var secTag = document.getElementById('sec15');
    console.log(arrColor, arrNum, secTag)
    secTag.style.backgroundColor = arrColor[arrNum];
}

//sec16
function TestScore (name, kor, eng) {
    this.userName = name;
    this.korNum = kor;
    this.engNum = eng;

    TestScore.prototype.getTestInfo = function () {
        document.getElementById("p16").innerHTML += `이름 ${name}, <br>`;
        document.getElementById("p16").innerHTML += `국어: ${kor}, <br>`;
        document.getElementById("p16").innerHTML += `영어: ${eng} <br>`;
    }
    TestScore.prototype.getAvg = function () {
        return (this.korNum + this.engNum) / 2
    }
}
var kimgun = new TestScore("김군", 80, 90);
var ohgun = new TestScore("오군", 100, 80);

kimgun.getTestInfo();
document.getElementById('p16').innerHTML += `평균 점수: ${kimgun.getAvg()} <br><br> <hr>`;

ohgun.getTestInfo();
document.getElementById('p16').innerHTML += `평균 점수: ${ohgun.getAvg()} <br><br>`;