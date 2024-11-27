const buttonValue = document.querySelector(".button-1")

const seletor = document.querySelector(".dolar-ou-euro")

const primeiroSeletor = document.querySelector (".primeiro-seletor")

function pegarValor() {
    const inputValor = document.querySelector(".input-1").value

    const dolarToday = 5.2

    const euroToday = 6.2

    const libraToday = 7.3

    const realToday = 0.1

    const valorNaoConvertido = document.querySelector(".valor-não-convertido")

    const valorConvertido = document.querySelector(".valor-convertido")


    valorNaoConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)


    if (seletor.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarToday)
    }

    if (seletor.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroToday)
    }

    if (seletor.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / libraToday)
    }

    if (seletor.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / realToday)
    }

    if (primeiroSeletor.value == "dolar") {
        valorNaoConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputValor)
    }

    if (primeiroSeletor.value == "euro") {
        valorNaoConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputValor)
    }

    if (primeiroSeletor.value == "libra") {
        valorNaoConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
        }).format(inputValor)
    }

    if (primeiroSeletor.value == "real") {
        valorNaoConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputValor)
    } 

}


function changeSelector() {
    const name = document.getElementById("nome-do-dindin")
    const image = document.querySelector(".bandeiras")



    if (seletor.value == "dolar") {
        name.innerHTML = "Dólar americano"
        image.src = "./assets/dolar.png"
    }

    if (seletor.value == "euro") {
        name.innerHTML = "Euro"
        image.src = "./assets/euro.png"
    }

    if (seletor.value == "libra") {
        name.innerHTML = "Libra"
        image.src = "./assets/libra 1.png"
    }

    if (seletor.value == "real") {
        name.innerHTML = "Real"
        image.src = "./assets/real.png"
    }

    pegarValor()
}

function changePrimeiroSeletor() {
    const nomeDospaises = document.getElementById("nome-do-pais")
    const primeiraImg = document.querySelector(".primeira-bandeira")

    if (primeiroSeletor.value == "dolar") {
        nomeDospaises.innerHTML = "Dólar americano"
        primeiraImg.src = "./assets/dolar.png"
    }

    if (primeiroSeletor.value == "euro") {
        nomeDospaises.innerHTML = "Euro"
        primeiraImg.src = "./assets/euro.png"
    }

    if (primeiroSeletor.value == "libra") {
        nomeDospaises.innerHTML = "Libra"
        primeiraImg.src = "./assets/libra 1.png"
    }

    if (primeiroSeletor.value == "real") {
        nomeDospaises.innerHTML = "Real"
        primeiraImg.src = "./assets/real.png"
    }

    pegarValor()
}



seletor.addEventListener("change", changeSelector)

buttonValue.addEventListener("click", pegarValor)

primeiroSeletor.addEventListener("change", changePrimeiroSeletor,)