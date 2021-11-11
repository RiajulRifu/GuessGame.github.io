'use_strict';
// home screen veriables
const playbtn = document.querySelector('.btn');
const home_inerface = document.querySelector('.container');
const game_inerface = document.querySelector('.game_interface');
const overlay = document.querySelector('.overlay');
const close_btn = document.querySelector('.x');

const open_window = function() {
    home_inerface.classList.add('hide_con');
    overlay.classList.remove('hide_con');
    game_inerface.classList.remove('hide_con');
};

const close_window = function() {
    home_inerface.classList.remove('hide_con');
    overlay.classList.add('hide_con');
    game_inerface.classList.add('hide_con');
};

playbtn.addEventListener('click', open_window);

close_btn.addEventListener('click', close_window);

overlay.addEventListener('click', close_window);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        close_window();
    }
});

// gameplay function

let lucky_num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreclass = document.querySelector('.score');
let highestscore = 0;
let highestscoreclass = document.querySelector('.highestscore');
let show_luckynum = document.querySelector('.number');
show_luckynum.textContent = '?';
let user_input = document.querySelector('#user_guess');
let click_btn = document.querySelector('.click');
let again_btn = document.querySelector('.play_again');
let massage = document.querySelector('.msg');
let game_win = false;

click_btn.addEventListener('click', function() {
    // console.log(massage);
    if (!game_win) {
        if (user_input.value == lucky_num) {
            show_luckynum.textContent = lucky_num;
            massage.textContent = '"You have guessed the number.."';
            if (score > highestscore) {
                highestscore = score;
            }
            highestscoreclass.textContent = highestscore;
            game_win = true;
        } else if (score > 0) {
            if (user_input.value > lucky_num) {
                massage.textContent = '"Too high.."';
                --score;
                scoreclass.textContent = score;
            } else if (user_input.value < lucky_num) {
                massage.textContent = '"Too low.."';
                --score;
                scoreclass.textContent = score;
            }
        } else if ((score = 0)) {
            game_win = true;
        }
    }
});

again_btn.addEventListener('click', function() {
    game_win = false;
    lucky_num = Math.trunc(Math.random() * 20) + 1;
    show_luckynum.textContent = '?';
    massage.textContent = '"Start here.."';
    score = 20;
    scoreclass.textContent = score;
    highestscoreclass.textContent = highestscore;
});