$(document).ready(function(){
    $('#tel').mask("(00) 00000-0000")

    $('#form').validate({
        rules:{
            nome:{required: true, minlength: 3, maxlength: 50},
            email:{required: true, email: true},
            tel:{required: false},
            msg:{required: true}
        },

        messages:{
            nome:'<span class="fw-bold" style="color: #c20000">Por favor, insira seu nome.</span>',
            email:'<span class="fw-bold" style="color: #c20000">Por favor, insira seu E-mail.</span>',
            msg:'<span class="fw-bold" style="color: #c20000">Por favor, escreva uma mensagem.</span>'
        },

        submitHandler: function(form){
            alert("Sua mensagem foi enviada, daremos o retorno o mais breve possível!")
            form.submit()
        },

        invalidHandler: function(event, validator){
            alert("Preencha os campos necessários antes de enviar!")
        }
    })
})