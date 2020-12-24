
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu"))


//Jeito didático >>

/*var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")

})
*/
//classList -> abrir a lista de classes da tag 
//toggle -> adicionar algo 
//classList.toggle -> adicionar algo à classe

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout_sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout_nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", () => {
    const prazo = document.querySelector("#prazo").value
    if (prazo == 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`

    }else{
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizarPreco()
    })


function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayot = document.querySelector("#layout_sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100
    if (temJS) preco *= 1.1 
    if (incluiLayot) preco += 500
    let taxaUrg = 1 - prazo*0.1
    preco *= 1 + taxaUrg
    document.querySelector("#preco").innerHTML = `R$${preco.toFixed(2)}`

}


