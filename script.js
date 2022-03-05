// REFERENCIAS
const input = document.getElementById('input');
const botonAgregar = document.getElementById('boton-agregar');
const container = document.getElementById('container')

class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea){
// CREAR INPUT
    const inputItem = document.createElement("input")
    inputItem.type="text"
    inputItem.disabled = true
    inputItem.classList.add("item-input")
    inputItem.value = nuevaTarea

// CREAR DIV
    const itemBox = document.createElement("div")
    itemBox.classList.add("item")

// CREAR BOTONES 
    const botonEditar = document.createElement("button")
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
    botonEditar.classList.add("boton-editar")
    const botonRemover = document.createElement("button")
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
    botonRemover.classList.add("boton-remover")
// REFERENCIAS
    const container = document.getElementById("container")
    
// AGREGAR ELEMENTOS
        
    itemBox.appendChild(inputItem)
    itemBox.appendChild(botonEditar)
    itemBox.appendChild(botonRemover)
    container.appendChild(itemBox)
       
// EVENTOS
    botonEditar.addEventListener("click",()=>{
        if(inputItem.disabled==true){
            inputItem.removeAttribute("disabled")
            // botonEditar.innerHTML = <i class="fas fa-lock-open"></i> ------- NO CAMBIA EL ICONO,, ADEMAS SI LO DESCOMENTAMOS ROMPE LA PAGINA
        } else {
            inputItem.setAttribute("disabled",true)}}
        )
    botonRemover.addEventListener("click",()=>{
        container.removeChild(itemBox)
        })
    }
}

// VERIFICAR INPUT
const chequearInput = ()=>{
    if (input.value!=""){
        new Item (input.value)
        input.value =""
    }

}
botonAgregar.addEventListener ("click", chequearInput)
