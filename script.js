//Função que envia dados ao servidor



function enviarDados(){
    //Obter valor dos campos do formulário

    const nome = document.getElementById('nome').value;

    const idade = document.getElementById('idade').value;

    fetch('http://localhost:3000/pessoas', {

    
    method: 'POST', //Método HTTP utilizado POST

    //Headers é um objeto da requisição HTTP que insere no JSON as informações.
    headers:{
        'Content-Type': 'application/json'//Tipo de conteúdo enviado JSON

    },

    //Body é um objeto js que foi co nvertido para o formato JSON usando o método Stringify
    body: JSON.stringify({nome: nome, idade: idade})

})
.then(response => response.json())
//Converte a resposta para JSON
} 