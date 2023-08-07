const div_data=document.querySelector('#div_data')
const div_relogio=document.querySelector('#div_relogio')
const btn_ativar=document.querySelector('#btn_ativar')
const btn_parar=document.querySelector('#btn_parar')
const tmp_alarme=document.querySelector('#tmp_alarme')
const hora_alarme=document.querySelector('#hora_alarme')
const timer=document.querySelector('#timer')

const data= new Date()

const som_alarme=new Audio("#")
som_alarme.loop=-1
let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener("click",(evento)=> {
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)
    hora_alarme.innerHTML=`Hora do Alarme ${dt_alarme.toLocaleTimeString()}`
})

btn_parar.addEventListener("click",(evento)=> {
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime=0
})

const relogio=()=> {
    const data= new Date()    
    div_relogio.innerHTML=data.toLocaleTimeString()
    if(alarme_ativado && !alarme_tocando) {
        if(data.getTime() >= ts_alarme) {
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

setInterval(relogio,1000)

div_data.innerHTML=data.toLocaleDateString()