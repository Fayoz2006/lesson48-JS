let form = document.forms.registration
let inputs = form.querySelectorAll('input')
let patterns = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    Surname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
}

function valiadte(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add(`active`)
        field.classList.remove(`unactive`)
    } else {
        field.classList.add(`unactive`)
        field.classList.remove(`active`)
    }
}

inputs.forEach(input => {
    input.onkeyup = () => {
        valiadte(input, patterns[input.getAttribute('name')])
    }
    form.onsubmit = (event) => {
        unvaliadte(input)
    }
})

function unvaliadte(param) {
    if (param.classList.contains(`unactive`)) {
        alert(`Error!`)
    } else {
        event.preventDefault()

        let userData = {}

        let fm = new FormData(form)

        fm.forEach((value, key) => {
            userData[key] = value
        })

        console.log(userData);
    }
}