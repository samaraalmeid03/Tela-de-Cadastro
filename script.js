let firstname = document.querySelector('#firstname')
let label_firstname = document.querySelector('#label_firstname')
let validFirstname = false

let lastname = document.querySelector('#lastname')
let label_lastname = document.querySelector('#label_lastname')
let validLastname = false

let user = document.querySelector('#user')
let label_user = document.querySelector('#label_user')
let validUser = false

let password = document.querySelector('#password')
let label_password = document.querySelector('#label_password')
let validPassword = false

let ConfirmPassword = document.querySelector('#ConfirmPassword')
let label_ConfirmPassword = document.querySelector('#label_ConfirmPassword')
let validConfirmPassword = false


firstname.addEventListener('keyup', () => {
    if (firstname.value.length <= 2) {
        label_firstname.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        validFirstname = false

    } else {
        label_firstname.innerHTML = 'Nome '
        validFirstname = true
    }
})

lastname.addEventListener('keyup', () => {
    if (lastname.value.length <= 2) {
        label_lastname.innerHTML = 'Sobrenome *Insira no mínimo 3 caracteres'
        validLastname = false

    } else {
        label_lastname.innerHTML = 'Sobrenome '
        validLastname = true
    }
})

user.addEventListener('keyup', () => {
    if (user.value.length <= 4) {
        label_user.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
        validUser = false

    } else {
        label_user.innerHTML = 'Usuário '
        validUser = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) {
        label_password.innerHTML = 'Senha: *Insira no minimo 6 caracteres'
        validPassword = false

    } else {
        label_password.innerHTML = 'Senha: '
        validPassword = true
    }
})

ConfirmPassword.addEventListener('keyup', () => {
    if (password.value != ConfirmPassword.value) {
        label_ConfirmPassword.innerHTML = 'Confirme a senha *As senhas não conferem'
        validConfirmPassword = false

    } else {
        label_ConfirmPassword.innerHTML = 'Confirme a senha '
        validConfirmPassword = true
    }
})

function cadastrar() {
    if (validFirstname && validLastname && validUser && validPassword && validConfirmPassword) {
        let userCad = JSON.parse(localStorage.getItem('userCad') || '[]')

        userCad.push(
            {
                firstname: firstname.value,
                lastname: lastname.value,
                user: user.value,
                password: password.value
            }
        )

        localStorage.setItem('userCad', JSON.stringify(userCad))

        alert('Cadastro efetuado com sucesso!')

    } else {
        alert('Preencha todos os campos antes de continuar!')
    }

}



