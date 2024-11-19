const buttonValue = document.querySelector(".button-1")

function pegarValor() {
    const inputValor = document.querySelector(".input-1").value

    const dolarToday = 5.2

    const euroToday = 6.2

    const seletor = document.querySelector(".dolar-ou-euro")

    const reaisBr = document.querySelector(".Real-BR")

    const valorConvertido = document.querySelector(".valor-convertido")
 
    const euroEs = 

    reaisBr.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)


if (seletor.value == 'dolar') {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValor / dolarToday)
}

if (seletor.value == 'euro') {
    valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {
        style:"currency",
        currency:"EUR"
    }).format(inputValor / euroToday)
}


}

buttonValue.addEventListener("click", pegarValor)