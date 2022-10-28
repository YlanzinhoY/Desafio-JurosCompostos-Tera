function gerar(){
    const nome = document.getElementById('meuNome')
    const mensalidade = document.getElementById('ms')
    const tempoContribuicao = document.getElementById('tc').value
    const tempo = tempoContribuicao * 12

    const taxaJuros = parseFloat(0.00517)

    let juros = parseFloat((mensalidade.value * (((1 + taxaJuros) ** tempo - 1) / taxaJuros)
    ))

    let body = document.getElementById('body')
    body.innerHTML = `<h1>Olá ${nome.value} Juntando R$ ${mensalidade.value} todo mês, você terá R$ ${juros.toFixed(2)} em ${tempo} meses</h1> 
        <button onclick="voltar()">Simular novamente</button>
    `
}
function voltar(){
    let body = document.getElementById('body')
    body.innerHTML = `<div class="div">
    <label>Nome</label>
    <input type="text" placeholder="Seu nome" id="meuNome">
    <label>Mensalidade</label>
    <input type="number" placeholder="mensalidae" id="ms" name="">
    <label>Tempo de contribuição</label>
    <input type="number" placeholder="contribuição em meses" id="tc" name="">
    <br>
    <button onclick="gerar()">enviar</button>
</div>
<hr>
<p id="para"></p>`
}


