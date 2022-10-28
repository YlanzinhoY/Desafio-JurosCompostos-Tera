function gerar(){
    const nome = document.getElementById('meuNome')
    const mensalidade = document.getElementById('ms')
    const tempoContribuicao = document.getElementById('tc').value
    const tempo = tempoContribuicao * 12
    const taxaJuros = parseFloat(0.00517)

    let juros = parseFloat((mensalidade.value * (((1 + taxaJuros) ** tempo - 1) / taxaJuros)
    ))

    if(nome.value ==='' || mensalidade.value === '' || tempoContribuicao === ''){
        return alert('Preencha todos os campos')
    } else{
        let body = document.getElementById('body')
        body.innerHTML = `<div class="container"><h1 class="mensagem">Olá ${nome.value} Juntando R$ ${mensalidade.value} todo mês, você terá R$ ${juros.toFixed(2)} em ${tempo} meses</h1> 
        <button onclick="voltar()">Simular novamente</button></div>
        `
    }
}
function voltar(){
    let body = document.getElementById('body')
    body.innerHTML = `<div class="title">
    <h1>Simulador de Juros compostos</h1>
</div>
<div class="div">
<section class="section">
    <label>Nome</label>
<input type="text" placeholder="Seu nome" id="meuNome" class="nome" name="">
<label>Mensalidade</label>
<input type="number" placeholder="mensalidae" id="ms" name="">
<label>Tempo de contribuição</label>
<input type="number" placeholder="contribuição em anos" id="tc" name="">
<button onclick="gerar()" class="simu">Simular</button>
</div>
</section>
<script src="script.js"></script>`
}


