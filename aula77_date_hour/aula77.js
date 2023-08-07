const div_data=document.querySelector('#div_data')
const div_relogio=document.querySelector('#div_relogio')
const data= new Date()

const relogio=()=> {
    const data= new Date()
    // let hora=data.getHours() <10? "0"+data.getHours():data.getHours() 
    // let minuto=data.getMinutes() <10? "0"+data.getMinutes():data.getMinutes()
    // let segundos=data.getSeconds() <10? "0"+data.getSeconds():data.getSeconds()
    // const horario=hora+":"+minuto+":"+segundos
    // div_relogio.innerHTML=horario   
    div_relogio.innerHTML=data.toLocaleTimeString()
}

setInterval(relogio,1000)

// const dia_m=data.getDate() <10? "0"+data.getDate():data.getDate()
// const mes=data.getMonth() <10? "0"+data.getMonth():data.getMonth()
// const data_r=dia_m+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML=data.toLocaleDateString()