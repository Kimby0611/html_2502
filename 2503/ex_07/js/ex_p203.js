fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    return response.json();
})
.then((data) => {
    console.log('Data 1: ', data);
});
const geData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log('Data 1: ', response);
        const data = await response.json();
        console.log('Data 2: ', data);
        const tbody = document.querySelector('#fetchTable tbody');
        data.slice(0, 10).forEach(items => {
            const row = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = items.id
            row.appendChild(idCell);
            
            const titleCell = document.createElement('td');
            titleCell.textContent = items.title
            row.appendChild(titleCell);

            const bodyCell = document.createElement('td');
            bodyCell.textContent = items.body
            row.appendChild(bodyCell);

            tbody.appendChild(row);
        });
    } catch (error){
        console.log(error.message);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    geData();
});

function rocketReady(rocketName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random() > 0.3;
            document.getElementById('p2').innerHTML = result;
            document.getElementById('p2').innerHTML = 'result: ' + result + '<br>';
            if (result) {
                resolve(rocketName + '발사 완료<br>');
            } else {
                reject(rocketName + '발사 살패<br>');
            }
        }, 3000);
    });
}
rocketReady('나로호')
.then((response) => {
    document.getElementById('p2').innerHTML += '성공' + response + "<br>";
})
.catch((response) => {
    document.getElementById('p2').innerHTML += '실패' + response + '<br>';
})
.finally((response) => {
    document.getElementById('p2').innerHTML += '우주 발사체 테스트 완료';
})