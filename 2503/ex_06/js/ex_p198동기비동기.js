const 라면_장보기 = () => (new Promise((resolve, reject) => {
    setTimeout (() => {
        document.getElementById('p1').innerHTML = 'A.라면 장보기 <br>';
        document.getElementById('p1').innerHTML += 'B.라면 물 끓이기 <br>';
        resolve('라면 장보기 완료');
    }, 1000);
    
}));

const 커피_장보기 = () => (new Promise((resolve, reject) => {
    setTimeout (() => {
        document.getElementById('p2').innerHTML = 'E.커피 장보기 <br>';
        document.getElementById('p2').innerHTML += 'F.커피 물 끓이기 <br>';
        reject('커피 품절');
    }, 500);
}));

const 약속배려함수 = async () => {
    try {
        const result = await 라면_장보기();
        document.getElementById('p1').innerHTML += 'C.끓는 물에 라면, 스프 넣고 익히기 <br>';
        document.getElementById('p1').innerHTML += 'D.라면 완성 후 시식하기 <br>';
    } catch (result) {
        document.getElementById('p1').innerHTML += result + '<br>';
        document.getElementById('p1').innerHTML += '라면 만들기 중단 <br>';
        return;
    }

    try {
        const result = await 커피_장보기();
        document.getElementById('p2').innerHTML += 'G.끓는 물에 커피 넣고 젓기 <br>';
        document.getElementById('p2').innerHTML += 'H.커피 완성 후 마시기 <br>';
    } catch (result) {
        document.getElementById('p2').innerHTML +=  result + '<br>';
        document.getElementById('p2').innerHTML += '커피 만들기 중단 <br>';
    }
}
약속배려함수();