 function limpaForm(){
    document.getElementById('nome').value = "";
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('cep').value = "";
    document.getElementById('celular').value = "";
    document.getElementById('email').value = "";

    document.getElementById('nome').focus();
}; 

/* const limpaForm = () => {
    document.getElementById('nome').value = "";
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('cep').value = "";
    document.getElementById('celular').value = "";
    document.getElementById('email').value = "";

    document.getElementById('nome').focus();
} */