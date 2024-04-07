function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#de6e39'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#283a64'
    }

}