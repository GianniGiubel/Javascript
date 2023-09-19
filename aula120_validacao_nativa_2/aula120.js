const f_nome=document.querySelector('#f_nome')
const f_nota=document.querySelector('#f_nota')
const f_msg=document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener("click",(event)=> {
    let estadoValidacao=f_nota.validity

    if(estadoValidacao.valueMissing) {
        f_nota.setCustomValidity("Este campo é obrigatório!")        
    } else if (estadoValidacao.rangeOverflow) {
        f_nota.setCustomValidity("Preencha com sua nota de 0 até 10")
    } else if (estadoValidacao.rangeUnderflow) {
        f_nota.setCustomValidity("Preencha com sua nota de 0 até 10")
    }

    f_nota.reportValidity()
    f_msg.innerHTML=f_nota.validationMessage
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
// rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
// rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
// setpMissmatch: true, se o valor de um elemento for inválido por seu atributo step.
// tooLong: true, se o valor de um elemento exceder seu atributo maxLenght.
// typeMissmatch: true, se o valor de um elemento for inválido por seu atributo type.
// valueMissing: true, se um elemento ( com atributo obrigatório) não tiver valor.
// valid: true, se o valor de um elemento for inválido.