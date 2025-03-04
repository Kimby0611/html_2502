var d = document;
function funHidden() {
    d.getElementById("panel").style.display = "block"; 
}

function imgNone () {
    d.getElementById("div9_1").style.display = 'none';
}

function imgHidden () {
    console.log(document.getElementById('div9_2'));
    d.getElementById('div9_2').style.visibility = 'hidden';
}

function imgReset () {
    d.getElementById('div9_1').style.display = 'flex';
    d.getElementById('div9_2').style.visibility = 'visible';
}