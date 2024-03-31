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
let rating = null

for (let i = 0; i < ratingBtns.length; i++){
    // button will increment the rating
    let btn = ratingBtns[i]
    btn.addEventListener('click' ,function() {
        ratingBtns.forEach(function(_btn) {
            _btn.classList.remove('active')
        })
        btn.classList.add('active')
        rating = i+1
    });
}

let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', function() {
    if(rating === null) {
        alert('Please select a rating')
        return
    }
    let value = document.querySelector('#value');
    value.innerHTML = `<u>${rating}</u>`;
    let exitScreen = document.querySelector('.exit-screen');
    exitScreen.style.display = 'flex';
    let survey = document.querySelector('.survey');
    survey.style.display = 'none';
});



