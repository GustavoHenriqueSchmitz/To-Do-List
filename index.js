
listajs = ['Estudar HTML', 'Estudar CSS', 'Estudar JS']

const ol = document.querySelector("ol")

function add() {
    const input = document.querySelector("input")
    listajs.push(input.value)
    input.value = ""
    render()
}

function render() {
    ol.innerHTML = null
    listajs.forEach(function (tar) {
        const li = document.createElement("li")
        li.innerText = tar
        ol.appendChild(li)
    });
}

function remove() {

}

render()
