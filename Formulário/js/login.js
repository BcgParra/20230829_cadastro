function verifica() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;


    if (email == '' || senha == '') {
        alert("Obrigatório o preenchimento do email e da senha");
        document.getElementById("email").focus;
    } else {
        pesquisa(email, senha);
    };
};

function pesquisa(email, senha) {
    if (email == "bruno" && senha == "1234") {

        window.open("./assets/index.html");
        window.close();

    } else {
        alert("Email ou senha inválido");
        document.getElementById("email").focus();
    }

}
