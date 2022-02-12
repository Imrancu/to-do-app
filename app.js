/* const buttons = document.getElementsByClassName('test-btn');


for (const button of buttons) {
    button.addEventListener('click', function(e) {
        // console.log(e.target.parentNode);
        if (e.target.id == 'btn1') {
            document.getElementById('title').style.backgroundColor = 'green';
        } else if (e.target.id == 'btn2') {
            document.getElementById('title').style.backgroundColor = 'blue';
        } else {
            document.getElementById('title').style.backgroundColor = 'red';
        }
    })
} */

let count = 0;

function add() {
    count++;
    control('count')
}

function minus() {
    if (count > 0) {
        count--;
        control('count');
    }
}

function control(id) {
    document.getElementById(id).innerText = count;
}