let day = document.getElementById('txtDay')
let mon = document.getElementById('txtMonth')
let yea = document.getElementById('txtYear')

let resY = document.getElementById('resYear')
let resM = document.getElementById('resMonth')
let resD = document.getElementById('resDay')
let comp = document.getElementById('oi')

let pD = document.getElementById('pDay')
let pM = document.getElementById('pMonth')
let pY = document.getElementById('pYear')

let erro1 = document.getElementById('erro1')
let erro2 = document.getElementById('erro2')
let erro3 = document.getElementById('erro3')

function campos(){
    // alert ('OI')
    day.style.borderColor = '#dfdbdb';
    mon.style.borderColor = '#dfdbdb';
    yea.style.borderColor = '#dfdbdb';
    pD.style.color = '#716f6f'
    pM.style.color = '#716f6f'
    pY.style.color = '#716f6f'
    erro1.style.display = 'none'
    erro2.style.display = 'none'
    erro3.style.display = 'none'
}

function result(){
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    if(day.value.length == 0 || mon.value.length == 0 || yea.value.length == 0){
        // alert ('ERRO CAMPOS')
        erro()
    }else if (Number(yea.value) > ano && Number(mon.value) > 12 && Number(day.value) > diasNoMes(Number(mon.value), Number(yea.value))){
        // alert ('ERRO TUDO')
        erroYMD()
    }else if(Number(yea.value) > ano && Number(mon.value) > 12){
        // alert ('ERRO ANO E MES')
        erroYM()
    }else if (Number(yea.value) > ano && Number(day.value) > diasNoMes(Number(mon.value), Number(yea.value))){
        // alert ('ERRO ANO E DIA')
        erroYD()
    }else if(Number(mon.value) > 12 && Number(day.value) > diasNoMes(Number(mon.value), Number(yea.value))){
        // alert ('ERRO MES E DIA')
        erroMD()
    }else if(Number(yea.value) > ano){
        // alert ('ERRO ANO')
        erroYear()
    }else if(Number(mon.value) > 12){
        // alert ('ERRO MES')
        erroMonth()
    }else if(Number(day.value) > diasNoMes(Number(mon.value), Number(yea.value))){
        // alert ('ERRO DIA')
        erroDay()
    }else{
        zerarErro()
        let y = ano - Number(yea.value)
        let m = Number(mon.value) - mes   
        let d = Number(day.value) - dia
        
        if(mon.value > mes){
            resY.innerHTML = `${y-1} `
        }else{
            resY.innerHTML = `${y} `        
        }
        if(mon.value > mes){
            resM.innerHTML = ` ${12 - m}`        
        }else if(mon.value <= mes){
            resM.innerHTML = ` ${mes - Number(mon.value)}`
        }
        
        if(day.value < dia){
            resD.innerHTML = ` ${dia - day.value}`
        }else if(day.value > dia){
            resD.innerHTML = ` ${d}`
        }
    }
}

function diasNoMes(mes, ano) {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

function erro(){
    day.style.borderColor = '#f55858';
    mon.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pM.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro1.style.display = 'block'
    erro2.style.display = 'block'
    erro3.style.display = 'block'
}

function erroYMD(){
    day.style.borderColor = '#f55858';
    mon.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pM.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro1.style.display = 'block'
    erro2.style.display = 'block'
    erro3.style.display = 'block'
    erro1.innerHTML = `Must be a valid day`
    erro2.innerHTML = `Must be a valid month`
    erro3.innerHTML = `Must be in the past`
}

function erroYM(){
    mon.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pM.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro2.style.display = 'block'
    erro3.style.display = 'block'
    erro2.innerHTML = `Must be a valid month`
    erro3.innerHTML = `Must be in the past`
}

function erroYD(){
    day.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro1.style.display = 'block'
    erro3.style.display = 'block'
    erro1.innerHTML = `Must be a valid day`
    erro3.innerHTML = `Must be in the past`
}

function erroMD(){
    day.style.borderColor = '#f55858';
    mon.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pM.style.color = '#f55858'
    erro1.style.display = 'block'
    erro2.style.display = 'block'
    erro1.innerHTML = `Must be a valid day`
    erro2.innerHTML = `Must be a valid month`
}

function erroDay(){
    day.style.borderColor = '#f55858';
    mon.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pM.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro1.style.display = 'block'
    erro1.innerHTML = `Must be a valid day`
}

function erroMonth(){
    day.style.borderColor = '#f55858';
    mon.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pM.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro2.innerHTML = `Must be a valid month`
    erro2.style.display = 'block'
}

function erroYear(){
    day.style.borderColor = '#f55858';
    mon.style.borderColor = '#f55858';
    yea.style.borderColor = '#f55858';
    pD.style.color = '#f55858'
    pM.style.color = '#f55858'
    pY.style.color = '#f55858'
    erro3.innerHTML = `Must be in the past`
    erro3.style.display = 'block'
}

function zerarErro(){    
    day.style.borderColor = '';
    mon.style.borderColor = '';
    yea.style.borderColor = '';
    pD.style.color = ''
    pM.style.color = ''
    pY.style.color = ''
    erro1.style.display = 'none'
    erro2.style.display = 'none'
    erro3.style.display = 'none'
}