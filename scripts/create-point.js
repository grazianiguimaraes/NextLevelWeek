function populaUFs(){
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json() )
  .then( states => {

    for( const state of states ) {
          ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    
    }
  })
}


populaUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState]

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione uma Cidade</option>"
    citySelect.disabled  = true 

    fetch(url)
    .then(res => res.json() )
    .then(cities => {
  
      for(const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      
      }
      citySelect.disabled = false 
    })
  }

  document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

  //Itens da Coleta
  const itemsToCollect = document.querySelectorAll(".items-grid li")

  for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
  }

  const collectedItems = document.querySelector("input[name=items]")

  let selectedItem = []

  function handleSelectedItem(event) {
    const itemLi = event.target

    //Adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    
    // Verificar se exstem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
      const itemFound = item == itemId //isso será true ou false
      return itemFound
    })
    
    // Função simplificada acima
    //const alreadySelected = selectedItems.FindIndex( item => item == itemId)
 
    // Se já estiver selecionadp
    if( alreadySelected >= 0) {
      // Tirar da Seleção
      const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId
        return itemIsDifferent
      })

      selectedItems = filteredItems
    } else {
      selectedItems.push(itemId)
    }
  
   collectedItems.value = selectedItems
  
}
