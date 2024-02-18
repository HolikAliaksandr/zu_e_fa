const count_user_disp = document.querySelector("#tableValue1")
const count_pc_disp = document.querySelector("#tableValue2")
const butt_stuone = document.querySelector('#b1')
const butt_scissors = document.querySelector('#b2')
const butt_paper = document.querySelector('#b3')
const butt_reset = document.querySelector('#b4')

let count_user = 0
let count_pc = 0

function getRandom(min, max) { // не включая максимум
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let pc_number = 0;
let us_number = 0;

function getVinner(){
    if (pc_number == us_number){
        alert('НИЧЬЯ')
    } else if (us_number==1 && pc_number==2){
        count_user++
        count_user_disp.innerHTML = count_user
    } else if (us_number==2 && pc_number==3){
        count_user++
        count_user_disp.innerHTML = count_user
    } else if (us_number==3 && pc_number==1){
        count_user++
        count_user_disp.innerHTML = count_user
    } else {
        count_pc++
        count_pc_disp.innerHTML = count_pc
    }
}

function hod_1(){
    pc_number = getRandom(1,4)
    us_number = 1;
    getVinner()
}
function hod_2(){
    pc_number = getRandom(1,4)
    us_number = 2;
    getVinner()
}
function hod_3(){
    pc_number = getRandom(1,4)
    us_number = 3;
    getVinner()
}

function reset(){
    count_user = 0
    count_pc = 0
    count_user_disp.innerHTML = 0
    count_pc_disp.innerHTML = 0
}

butt_stuone.addEventListener('click', hod_1)

butt_scissors.addEventListener('click', hod_2)

butt_paper.addEventListener('click', hod_3)

butt_reset.addEventListener('click', reset)
