const buttonSearch = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')
const closer = document.querySelector('#modal .header a')
buttonSearch.addEventListener('click', function() {
    modal.classList.remove('hide')
})
closer.addEventListener('click', function() {
    modal.classList.add('hide')
})