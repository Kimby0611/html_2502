//sec1
//동기 방식
document.getElementById('p1').innerHTML = '======동기 방식====== <br>';
document.getElementById('p1').innerHTML += '1. 라면 장보기 <br>';
document.getElementById('p1').innerHTML += '2. 물 끓이기 <br>';
document.getElementById('p1').innerHTML += '3. 끓는 물에 라면, 스프 넣고 익히기 <br>';
document.getElementById('p1').innerHTML += '4. 완성 <br>';

//비동기 방식
document.getElementById('p2').innerHTML = '======비동기 방식====== <br>';
setTimeout(() => {
    document.getElementById('p2').innerHTML += 'A.라면 장보기';
}, 3000);
document.getElementById('p2').innerHTML += 'B. 물 끓이기 <br>';
document.getElementById('p2').innerHTML += 'C. 끓는 물에 라면, 스프 넣고 익히기 <br>';
document.getElementById('p2').innerHTML += 'D. 완성 <br>';

//sec2
const 라면_장보기 = new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('p3').innerHTML = 'A.라면 장보기 <br>';
        document.getElementById('p3').innerHTML += 'B.라면 물 끓이기 <br>';
        resolve('라면 장보기 완료');
    }, 1000);
});
라면_장보기.then ((result) => {
    document.getElementById('p3').innerHTML += result + ' <br>';
    document.getElementById('p3').innerHTML += 'C.끓는 물에 라면, 스프 넣고 익히기 <br>';
    document.getElementById('p3').innerHTML += 'D.라면 완성 후 시식하기 <br>';
})
.catch ((result) => {
    document.getElementById('p3').innerHTML += result + ' <br>';
    document.getElementById('p3').innerHTML += '라면 만들기 중단 <br>';
})

//커피 장보기를 실패한 경우
const 커피_장보기 = new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('p4').innerHTML = 'E.커피 장보기 <br>';
        document.getElementById('p4').innerHTML += 'F.커피 물 끓이기 <br>';
        reject('커피 품절');
    }, 1000);
});
커피_장보기.then ((result) => {
    document.getElementById('p4').innerHTML += 'G.끓는 물에 커피 넣고, 젓기 <br>';
    document.getElementById('p4').innerHTML += 'H.커피 완성 후 마시기 <br>';
})
.catch ((result) => {
    document.getElementById('p4').innerHTML += result + '<br>';
    document.getElementById('p4').innerHTML += '커피 마시기 중단 <br>';
});
//파스타 장보기
const 파스타_장보기 = new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('p5').innerHTML = 'no result';
    }, 1000);
});
setTimeout(() => {
    console.log('라면 장보기', 라면_장보기);
    console.log('커피 장보기', 커피_장보기);
    console.log('파스타 장보기', 파스타_장보기);
}, 1000)