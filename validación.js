let paymentForm = document.querySelector('#paymentForm');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let allOk = true;

    const form = e.target;
    

    if(card.value === ""){
        alert("card no puede estar vacio");
    } */

    let soloNumeros = /^5432 [0-9]{4} [0-9]{4} [0-9]+$/;
    let checkCVC = /^[0-9]{3,5}$/;
    let soloLetras = /^[a-zA-Z\s]+$/;

    if (form.card.value === "" || !soloNumeros.test(form.card.value)) {
        todoBien = false;
        alert("Debe llenar el campo Card")
    }

    if (form.cvc.value === "" || !checkCVC.test(form.cvc.value)) {
        todoBien = false;
    }

    if (form.name.value === "" || !soloLetras.test(form.name.value)) {
        todoBien = false;
    }


    if (todoBien) {
        form.submit();
    } else {
        alert("Por favor verifique el formulario...");
    }
})

let click = document.querySelector('#click');

