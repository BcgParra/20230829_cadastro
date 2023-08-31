

function verifica() {
    let nome = document.getElementById('nome').value;
    if (nome == '') {
        alert("Preencha o campo nome");
        document.getElementById('nome').focus();              
    }

    const rua = document.getElementById('rua').value;
    if (rua == '') {
        alert("Preencha o campo rua");
    }

    if (document.getElementById('bairro').value == '') {
        alert("Preencha o campo bairro")
    }

    if (document.getElementById('cidade').value == '') {
        alert("Preencha o campo cidade")
    }

    if (document.getElementById('celular').value == '') {
        alert("Preencha o campo celular")
    }

    if (document.getElementById('email').value == '') {
        alert("Preencha o campo email")
    }

          
};


 
