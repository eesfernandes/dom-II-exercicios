const adicionaItem = () => {
    // Cria um novo item (article)
    const newItem = document.createElement('article');

    // Exercicio 2 - Criando uma classe para o novo item (article) ser estilizado pelo css
    newItem.classList.add('item')

    // Adicionando o evento onlick no item (article) criado
    newItem.setAttribute('onclick', 'removeItem(event)');

    // Cria um texto
    const addText = document.createTextNode('Item DOM')

    // Pegando o item criado (article) e adicionando o texto dentro dele
    newItem.appendChild(addText)

    // Pegando o container (main)
    const pegarCotainer = document.getElementById('container')

    // Pegando o container (main) e adicionando o novo item (article) depois do fim
    pegarCotainer.insertAdjacentElement('beforeend', newItem)
}

const removeItem = (event) => {
    event.target.remove()
}