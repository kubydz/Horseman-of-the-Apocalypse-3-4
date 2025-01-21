let smallCups = document.querySelector('.cup-small')
let litres = document.getElementById('litres')
let percentage =  document.getElementById ('percentage')
let remained = document.getElementById('remained')
let goalText = document.getElementById('goal-text')



updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    else if (smalCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add ('full')
        } else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()

}

function updateBigCup() {
    let fullCups = document.querySelector('.cup-small.full').length;
    let totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = "hidden"
        percentage.style.height = 0 ;
    }
    else {
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups  / totalCups *  100}%`
    }
    if(fullCups === totalCups) {
        remained.style.visibility ='hidden'
        remained.style.height = 0
        goalText.innerText = "Goal : Completed"
    }

    else {
        remained.style.visibility ='visible'
        remained.style.height = `${2 - (250 * fullCups / 1000)}L`
        goalText.innerText = "Goal : 2 Litres"

    }
}