var btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
	var peso = document.querySelector("#peso").value
	var altura = document.querySelector("#altura").value
	var div = document.querySelector(".container")
	div.classList.remove("invisivel")
	imc(peso, altura)
	pesoMin(altura)
	pesoMax(altura)
	pesoMedio(altura)
})

function imc(peso, altura) {
	var imc = peso / (altura * altura)
	var resposta = document.querySelector(".imc-resultado")
	var considera = document.querySelector(".considerado")
	resposta.textContent = imc.toFixed(2)
	if (18.5 > imc) {
		considera.textContent = "abaixo do peso ideal"
	} else if (imc >= 18.5 && imc <= 24.9) {
		considera.textContent = "peso normal"
	} else if (imc >= 25 && imc <= 29.9) {
		considera.textContent = "sobrepeso"
	} else if (30 <= imc && imc <= 34.9) {
		considera.textContent = "obsidade grau I"
	} else if (35 <= imc && imc <= 39.9) {
		considera.textContent = "obseidade grau II"
	} else if (imc > 40) {
		considera.textContent = "obesidade grau III"
	}
}

function pesoMin(altura) {
	var pmin = 18.5 * (altura * altura)
	var td_pmin = document.querySelector('.pmin')
	td_pmin.textContent = pmin.toFixed(2)
	return pmin
}

function pesoMax(altura) {
	var pmax = 24.9 * (altura * altura)
	var td_pmax = document.querySelector(".pmax")
	td_pmax.textContent = pmax.toFixed(2)
	return pmax
}

function pesoMedio(altura) {
	var pmin = pesoMin(altura)
	var pmax = pesoMax(altura)
	var pmed = (pmin + pmax) / 2
	var td_pmed = document.querySelector(".pmed")
	td_pmed.textContent = pmed.toFixed(2)
}