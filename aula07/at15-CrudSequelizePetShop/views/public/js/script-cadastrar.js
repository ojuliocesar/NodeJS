// add evento de onclick no elemento 
document.querySelector('#btn-cadastrar').addEventListener('click', ()=>{
    
    // prevencao de envio padrao
    window.event.preventDefault()

    let nome = document.getElementById('nome').value

    let email = document.getElementById('email').value

    let senha = document.getElementById('senha').value

    let confirmar = document.getElementById('confirmar').value

    const result = fetch('/cadastrar/usuarios',{
        method: "POST",
        body:`nome=${nome}&email=${email}&senha=${senha}`,
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        }
    })
    .then(response=>response.json())
    .then(result => {
        
        // aqui temos a resposta do backend node
        Swal.fire({
            title: result.response ? 'Ebaaa' : 'Oops...',
            icon: result.response ? 'success' : 'error',
            text: result.message
        })

        result.response && document.getElementById('form-usuarios').reset();
    })
    
})

