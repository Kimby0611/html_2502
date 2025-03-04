//sec1
function btn1 () {
    const contry = ['영어', '중국어'];
    const subjects = ['쓰기', '말하기'];
    const myMap1 = new Map();
    for (let i = 0;i < contry.length; i ++) {
        myMap1.set(contry[i], []);
        for (let k = 0; k < subjects.length; k ++) {
            myMap1.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[k]}점수는?`))
        }
    }
    console.log("영어 점수는: ", myMap1.get("영어"));
    console.log("중국어 점수는: " , myMap1.get("중국어"));
    document.getElementById('p1').innerHTML = "영어 점수는: " + myMap1.get("영어") + "<br>";
    document.getElementById('p1').innerHTML += "중국어 점수는: " + myMap1.get("중국어");
}

//sec2
const users = {
    "userA": [50, 60, 100],
    "userB": [80, 90, 70],
    "userC": [75, 80, 90]
}
console.log(users);
//구조 분해 할당 방식
const {userA, userB} = users;
console.log({userA, userB});
//전개 구문 >> 배열을 풀어서 값만 가져오기
const arr = [...userA, ...userB];
console.log (arr);
let sum = 0;
for (let i = 0; i < arr.length; i ++) {
    sum += arr[i];
}
document.getElementById("p2").innerHTML = `userA와 userB의 점수 합계는 ${sum}점.`;

//sec3
const arr1 = [10, 20 , 30];
//arr1 의 값을 item에 넣어 /10을 해서 item에 저장
const arr2 = arr1.map((item) => (item/10));
console.log(arr2);
document.getElementById("p3").innerHTML = arr2;
const arr3 = ['홍길동', '김갑중', '박상무'];
const arr4 = arr3.map((item, idx) => {
    let obj = {};
    obj['no'] = idx + 1;
    obj['username'] = item;
    return obj;
});
console.log(arr4);
document.getElementById("p3").innerHTML += JSON.stringify(arr4);

//sec4
document.getElementById("btn4").addEventListener("click", function () {
    const subjects4 = ["쓰기", "듣기", "말하기"];
    const arr4_1 = subjects4.map((item) => {
        return prompt(`영어 ${item}의 점수는?`, "0");
    });
    let result4 = arr4_1.some((item) => (item < 60));
    result4 = result4 ? "불합격":"합격";
    document.getElementById("p4").innerHTML = result4;
})

//sec5
document.getElementById("btn5").addEventListener("click", function () {
    const subjects5 = ["쓰기", "듣기", "말하기"];
    const arr5 = subjects5.map((item) => {
        return prompt(`당신의 영어 ${item}의 점수는?`, "");
    });
    let result5 = arr5.every((item) => (item <= 60));
    result5 = result5 ? "불합격":"합격"
    document.getElementById("p5").innerHTML = result5;
});

//sec6
const fruit_1 = ["딸기", "바나나", "파인애플"];
const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
const fruit_3 = [...fruit_1];
fruit_2.map((item) => {
    if(!fruit_3.includes(item)) {
        fruit_3.push(item);
    }
});
document.getElementById("p6").innerHTML = fruit_3;

//sec7
function btn7 () {
    const subjects7 = ["쓰기", "듣기", "말하기"];
    const arr7 = [];
    for (let item of subjects7) {
        arr7.push(prompt(`영어 ${item}의 점수는?`, ""));
    }
    let result7 = arr7.every((item) => item >= 60);
    result7 = result7 ? "합격":"불합격";
    document.getElementById("p7").innerHTML = result7;
}

//sec8
function popup () {
    window.open("http://127.0.0.1:5500/windowpopup.html", "pop1", "width = 300, height = 400, left = 300, top = 50");
}
// window.open("http://127.0.0.1:5500/windowpopup.html", "pop1", "width = 300, height = 400, left = 300, top = 50");

//sec9
var addNum = 0;
var subNum = 1000;
var auto_1 = setInterval(function () {
    addNum ++;
    // console.log("addNum: " + addNum);
    document.getElementById('p9').innerHTML = "addNum: " + addNum + '<br>' + "subNum: " + subNum;
}, 3000);
var auto_2 = setInterval(function () {
    subNum --;
    // console.log("subNum: " + subNum);
    document.getElementById('p9').innerHTML = "addNum: " + addNum + '<br>' + "subNum: " + subNum;
}, 3000);

//sec10
var addNum10 = 0;
var auto_10 = setTimeout(function () {
    addNum10 ++;
    console.log(addNum10)
    document.getElementById("p10").innerHTML = addNum10;
}, 3000);

//sec11
var info = navigator.userAgent.toLowerCase();
var osImg = null;
console.log(info)
if (info.indexOf('windows') >= 0) {
    osImg = "../images/windows.png";
} else if (info.indexOf('macintosh') >= 0) {
    osImg = "../images/macintosh.png";
}  else if (info.indexOf('iphone') >= 0) {
    osImg = "../images/iphone.png";
}  else if (info.indexOf('android') >= 0) {
    osImg = "../images/android.png";
}
document.getElementById("p11").innerHTML = "<img src=\"images/" + osImg + "\">" + "<br>";
var src = screen;
var sc_w = screen.width;
var sc_h = screen.height;
document.getElementById("p11").innerHTML += '모니터 해상도 너비: ' + sc_w + 'px' + '<br>';
document.getElementById("p11").innerHTML += '모니터 해상도 높이: ' + sc_h + 'px' + '<br>';

//sec12
document.getElementById("btn12").addEventListener("click", function () {
    var phoneNum = prompt("전화번호를 입력하세요", "0");
    while (phoneNum == "" || phoneNum.length < 10 || phoneNum.length > 12) {
        alert("유효한 전화번호를 입력하세요");
        var phoneNum = prompt("전화번호를 입력하세요", "0");
    }
    var result12 = phoneNum.substring(0, phoneNum.length - 4) + "****";
    document.getElementById("p12").innerHTML = result12 + "<br>";
})

// var phoneNum = "010-1234-1234";
// var result12 = phoneNum.substring(0, phoneNum.length - 4) + "****";
// document.getElementById("p12").innerHTML = result12 + "<br>";
var imgSrc = "../images/bnt_out.jpg";
var result12_2 = imgSrc.replace("out", "over");
document.getElementById("p12").innerHTML += result12_2;

//sec13
var menu = ["짜장면", "돈까스", "김치찌개", "회덮밥"];
var menuNum = Math.floor(Math.random() * menu.length);
var result13 = menu[menuNum];
document.getElementById("p13").innerHTML = result13;