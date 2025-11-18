function mostrar_senha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList('bi-eye-slash-fill', 'bi-eye-fill')
    }
}