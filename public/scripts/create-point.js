function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) // function anonima que retorna um valor
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
 
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>" // option padrao
    citySelect.disabled = true
    
    // buscar o conteudo interno das cidades
    fetch(url)
    .then( res => res.json() )
    .then( cities => {
            
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
    
        citySelect.disabled = false
    } )
}
    
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// itens de coleta
// pegando todos os li's
const itemsToCollect = document.querySelectorAll(".itens-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem )
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com JS
    itemLi.classList.toggle("selected") // adicionar ou remover na lista

    const itemId = itemLi.dataset.id

    //console.log('ITEM ID: ', itemId)

    // verificar se existem itens selecionados
    // se sim, pegar esses itens
    const alreadySelected = selectedItems.findIndex( function(item) {
        const itemFound = item == itemId // retornara true or false
        return itemFound
    })

    // caso esteja selecionado, tirar da selecao
    if( alreadySelected >= 0) {
        // tirar item da selecao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else {
        // caso não esteja selecionado, adicionar a selecao
        selectedItems.push(itemId)
    }

    //console.log('selectedItems: ', selectedItems)

    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}