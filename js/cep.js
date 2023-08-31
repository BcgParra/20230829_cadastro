/* arrow function */

const pesquisaCEP = async () => {
    const cep = document.getElementById('cep').value;

    /* passando o cep pra API viacep */
    /* usando template script `` */
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();

    

    preencherFormulario(endereco);
};

/* Função para preencher o formulário */

const preencherFormulario = (endereco) =>{
document.getElementById('rua').value = endereco.logradouro;
document.getElementById('bairro').value = endereco.bairro;
document.getElementById('cidade').value = endereco.localidade + " - " + endereco.uf;

if(endereco.erro == 'true'){
    alert('CEP incorreto');
    limpaForm();
    document.getElementById("cep").focus();

};

};


/* Criando um eventodo input CEP */

document.getElementById('cep')
    .addEventListener('focusout', pesquisaCEP);

