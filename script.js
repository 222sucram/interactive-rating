const btnSubmit = document.querySelector('.submit')
const listRating = document.querySelectorAll('.rating')
const containerRating = document.querySelector('.card-container')
const containerThanks = document.querySelector('.thank-you-container')
const msgRating = document.querySelector('.selected-rating')
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

btnSubmit.addEventListener('click', function(e) {
    containerRating.classList.toggle('hidden')
    containerThanks.classList.toggle('hidden')
    msgRating.textContent = `You have selected ${selectedRating} out of 5 stars`
})