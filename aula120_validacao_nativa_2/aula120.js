const f_nome=document.querySelector('#f_nome')
const f_nota=document.querySelector('#f_nota')
const f_msg=document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener("click",(event)=> {
    let msg=null

    if(!f_nota.checkValidity()) {
        msg=f_nota.validationMessage
    }

    f_msg.innerHTML=msg
    event.preventDefault()
    })

// Métodos de validação DOM

// checkValidity()
// setCustomValidity()
// -----------------------------------------------------------------------------
// propriedade de validação DOM

// Validity
// validationMessage
// -----------------------------------------------------------------------------
// propriedades de validação

// customError: true, se uma mensagem de validação personalizada for definida.
// patternMissmatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
// rangeOverFlow: true, se o valor de um elemento for maior que seu atributo max.
// rangeUnderFlow: true, se o valor de um elemento for menor que seu atributo min.
// setpMissmatch: true, se o valor de um elemento for inválido por seu atributo step.
// tooLong: true, se o valor de um elemento exceder seu atributo maxLenght.
// typeMissmatch: true, se o valor de um elemento for inválido por seu atributo type.
// valueMissing: true, se um elemento ( com atributo obrigatório) não tiver valor.
// valid: true, se o valor de um elemento for inválido.