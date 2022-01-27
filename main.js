let paymentForm = document.querySelector('#paymentForm');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let allOk = true;
    const form = e.target;
    

    let solonumeros = /^[0-9]+$/;
    let solonumerosCVC = /^[0-9]{3}$/;
    let sololetras = /^[a-zA-Z\s]+$/;


    if (form.card.value === "" || !solonumeros.test(form.card.value)) {
        allOk = false;
        
    }

    if (form.cvc.value === "" || !solonumerosCVC.test(form.cvc.value)) {
        allOk = false;
    }

    if (form.amount.value === "" || !solonumeros.test(form.amount.value)) {
        allOk = false;
    }

    if (form.firstname.value === "" || !sololetras.test(form.firstname.value)) {
        allOk = false;
    }

    if (form.lastname.value === "" || !sololetras.test(form.lastname.value)) {
        allOk = false;
    }

    if (form.city.value === "" || !sololetras.test(form.city.value)) {
        allOk = false;
    }

    if (form.state.value === "") {
        allOk = false;
    }

    if (form.postalcode.value === "" || !solonumeros.test(form.postalcode.value)) {
        allOk = false;
    }

    if (form.textarea.value === "") {
        allOk = false;
    }

    if (allOk) {
        form.submit();
    } 
    
    else  {
        alert("Por favor verifique el formulario...");
    }
})

