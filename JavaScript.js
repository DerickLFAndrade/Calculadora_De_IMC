function calcImc() {
    const form = document.querySelector("[data-form-f]");
    const pesoP = document.querySelector('[data-peso-p]');
    const alturaA = document.querySelector('[data-altura]');
    const resultado = document.querySelector('[data-resultado]');
  const bot = document.querySelector('[data-bot]')
    
    
 form.addEventListener("submit", (e) => {
     const peso = Number(pesoP.value)
     const altura = Number(alturaA.value)
     console.log(peso, altura)
    e.preventDefault();
     resultado.innerHTML = `${(peso / Math.pow(altura, 2)).toFixed(2)} `;
    

 })
    
  }
calcImc();