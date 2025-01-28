let amigos = [];
console.log(amigos);
let nomeAmigos;
let listaAmigos;
let sorteados;

function adicionarAmigo() {
    nomeAmigos = document.getElementById("amigo").value.trim();
    console.log("clicando add");
    if (nomeAmigos == "") {
        alert("Por favor insira um nome.");
    }
    else if (amigos.includes(nomeAmigos)) {
        alert("Nome já informado! Insira novo nome.");
    }
    else {
        amigos.push(nomeAmigos);
    console.log(amigos);
    document.getElementById("amigo").value ="";
    atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    let i = 0; // Inicializa a variável i como 0 para começar a iterar pelo array
while (i < amigos.length) { // Enquanto i for menor que o número de amigos
    let li = document.createElement("li"); // Cria um novo item de lista <li>
    li.innerHTML = amigos[i]; // Define o texto do item como o nome do amigo
    listaAmigos.appendChild(li); // Adiciona o <li> ao <ul>
    i++; // Incrementa a variável i para passar para o próximo amigo
}
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
    } else {
        // Gera um número aleatório de 0 até amigos.length - 1
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        
        // Acessa o nome do amigo sorteado pelo índice
        let amigoSorteado = amigos[indiceSorteado];

        // Exibe o nome do amigo sorteado
        console.log("Amigo sorteado: " + amigoSorteado);
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    }
}
