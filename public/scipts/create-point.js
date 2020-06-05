function populateUFs() {
    const ufselect = document.querySelector('select[name=uf]')
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados') //um tipo de promessa
    .then(res => res.json()) //também é uma função anônima
    .then(states => {
        for (state of states) {
            ufselect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`
        }
    } )
}
populateUFs()
function getCities(event) {
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('[name=state]')
    const ufvalue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    //Isso foi para esconder o número do estado na url
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}
document
    .querySelector('[name=uf]')
    .addEventListener('change', getCities)


//ITENS  DE COLETA
// pega todos os li's 
const itemsToCollect = document.querySelectorAll('.items-grid li')
for (item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}
const collectedItems = document.querySelector('input[name=items]')
let selectedItems = []
function handleSelectedItem(event) {
    const itemLi = event.target
    //adicionar/remover classe com js
    itemLi.classList.toggle('selected')
    const itemId = event.target.dataset.id
    //Vai procurar o número do id e ver se ele tem index no array.
    const alreadySelected = selectedItems.findIndex(function(item){
        //Verifica se o item selecionado é igual a algum do array. 
        //Se sim, retorna-o
        return item == itemId
    })
    if (alreadySelected >= 0) {
        //Vai filtrar os itens
        const filteredItems = selectedItems.filter(function(item) {
            const itemIsDifferent = item != itemId
            //Vai receber valores true e false, filtrando e retornando eles
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}
