const slides = document.querySelectorAll('.card')


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


for (const item of slides) {
    // console.log(item)
    item.addEventListener('click', function () {
        if (item.classList.value == 'card active') {
            item.classList.remove('active')
        } else {
            clearActiveClasses()
            item.classList.add('active')
        }
    })
}

function clearActiveClasses() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    slides.forEach(function (item) {
        item.classList.remove('active')
    })
}