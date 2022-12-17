
const formulario = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span__required');
const botao = document.getElementById('botao');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let confirmaNome, confirmaEmail, confirmaAssunto, confirmaMensagem;

campos.forEach(input => {
    input.addEventListener("input", 
    (e) => validaCampos(e.target));
});

function validaCampos(input){
    if(input.id == 'nome'){
        confirmaNome = validaNome(input);
    } else if (input.id == 'email') {
        confirmaEmail = validaEmail(input);
    } else if (input.id == 'assunto') {
        confirmaAssunto = validaAssunto(input);
    } else if (input.id == 'mensagem') {
        confirmaMensagem = validaMensagem(input);
    }

    if (confirmaNome && confirmaEmail && confirmaAssunto && confirmaMensagem) {
        validaBotao();
    } else{
        invalidaBotao();
    }
}

function validaNome(input) {
    if(input.value.length == 0){
            campos[0].style.border = '1px solid red';
            spans[0].innerHTML = 'O campo nome não pode estar vazio';
            spans[0].style.display = 'block';
            return false;
        } else if(input.value.length <= 4 || input.value.length >= 50){
            campos[0].style.border = '1px solid red';
            spans[0].innerHTML = 'O campo nome deve conter entre 5 e 50 caracteres';
            spans[0].style.display = 'block';
            return false;
        } else{
            campos[0].style.border = 'none';
            spans[0].innerHTML = '';
            return true;    
        }
}

function validaEmail(input) {
    if(input.value.length == 0){
        campos[1].style.border = '1px solid red';
        spans[1].innerHTML = 'O campo email não pode estar vazio';
        spans[1].style.display = 'block';
        return false;
    } else if (!emailRegex.test(campos[1].value)) {
        campos[1].style.border = '1px solid red';
        spans[1].innerHTML = 'O campo email não está no formato correto';
        spans[1].style.display = 'block';
        return false;
    }else{
        campos[1].style.border = 'none';
        spans[1].innerHTML = '';
        return true;
    }
}

function validaAssunto(input) {
     if(input.value.length == 0){
        campos[2].style.border = '1px solid red';
        spans[2].innerHTML = 'O campo assulto não pode estar vazio';
        spans[2].style.display = 'block';
        return false;
    } else if(input.value.length <= 2 || input.value.length >= 50){
        campos[2].style.border = '1px solid red';
        spans[2].innerHTML = 'O campo assunto deve conter entre 3 e 50 caracteres';
        spans[2].style.display = 'block';
        return false;
    }else{
        campos[2].style.border = 'none';
        spans[2].innerHTML = '';
        return true;

    }
}

function validaMensagem(input) {
     if(input.value.length == 0){
        campos[3].style.border = '1px solid red';
        spans[3].innerHTML = 'O campo mensagem não pode estar vazio';
        spans[3].style.display = 'block';
        return false;
    } else if(input.value.length <= 2 || input.value.length >= 300){
        campos[3].style.border = '1px solid red';
        spans[3].innerHTML = 'O campo mensagem deve conter entre 3 e 300 caracteres';
        spans[3].style.display = 'block';
        return false;
    }else{
        campos[3].style.border = 'none';
        spans[3].innerHTML = '';
        return true;
    }
}

function validaBotao() {
    botao.disabled = false;
    botao.style.backgroundColor = '#2A7AE4';
    botao.style.border = '1px solid #2A7AE4';
    botao.style.cursor = 'pointer';
}

function invalidaBotao() {
    botao.disabled = true;
    botao.style.backgroundColor = 'lightgray';
    botao.style.border = '1px solid gray';
    botao.style.cursor = 'auto';
}