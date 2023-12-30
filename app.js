// do

/*
    .rating {

    }

    .rating.active {

    }
*/

// let ratingBtns = document.querySelectorAll(".rating")

// for (let i = 0; i < ratingBtns.length; i++) {
//     // button will increment the rating
//     let btn = ratingBtns[i]
//     // btn.onclick = ...
//     function handleClick() {
//         ratingBtns.forEach(function(_btn) {
//             _btn.classList.remove('active')
//         })
//         btn.classList.add('active')
//     }
//     btn.addEventListener('click', handleClick)
// }

let ratingBtns = document.querySelectorAll(".rating")

for (let i = 0; i < ratingBtns.length; i++){
    // button will increment the rating
    let btn = ratingBtns[i]
    btn.addEventListener('click' ,function() {
        ratingBtns.forEach(function(_btn) {
            _btn.classList.remove('active')
        })
        btn.classList.add('active')
        
    });
}

let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', function() {
    let exitScreen = document.querySelector('.exit-screen');
    exitScreen.style.display = 'flex';
    let survey = document.querySelector('.survey');
    survey.style.display = 'none';
});



