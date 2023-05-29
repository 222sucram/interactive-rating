const btnSubmit = document.querySelector('.submit')
const listRating = document.querySelectorAll('.rating')
let selectedRating 


listRating.forEach(item => {
    item.addEventListener('click', function(e) {
        listRating.forEach((item) => {
            item.classList.remove('selected')
        }) 
        item.classList.add('selected')
        selectedRating = item.textContent
    })
}
)

