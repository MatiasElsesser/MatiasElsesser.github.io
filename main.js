const inputNombre = document.getElementById("nombre");
const inputAnio = document.getElementById("anio");
const inputPrecio = document.getElementById("precio");
const display = document.getElementById("display");
const btnCarga = document.getElementById("btnCarga")
const formulario = document.getElementById("formulario")

const createCard = () => {
      const div = document.createElement("div")
      const text = document.createElement("h3")
      const btn = document.createElement("button")
      div.appendChild(text)
      div.appendChild(btn)
      btn.innerHTML = "Eliminar de la lista"
      display.appendChild(div)
      btn.classList.add("btn_warning")
      text.innerHTML = `Nuevo ingreso: ${inputNombre.value} ${inputAnio.value}  a solo $${inputPrecio.value}`

      btn.addEventListener("click", (e) => {
            e.preventDefault()
            display.removeChild(div)
      })
}


btnCarga.addEventListener("click", (e) => {
      e.preventDefault()
      createCard()
      formulario.reset()
})

