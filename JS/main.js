$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu telefone principal',
            cpf: 'Por favor, insira o seu CPF completo',
            endereco: 'Por favor, insira o seu endereço completo',
            cep: 'Por favor, insira o seu CEP'
        },
        
        errorClass: 'error', // Define a classe de estilo das mensagens de erro

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})