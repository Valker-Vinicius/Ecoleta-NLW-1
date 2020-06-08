const darkmode = document.querySelector('li#dark-mode')
const body = document.getElementsByTagName('body')[0]
darkmode.addEventListener('click', handleSelectedItem)
function handleSelectedItem(event) {
    body.classList.toggle('dmode')
}