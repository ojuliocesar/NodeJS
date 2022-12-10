const validaLogin = () => {
  let email = $('#email').val();
  let senha = $('#senha').val();

  if (!email) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o Campo e-mail"
    })

  } else if (!senha) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o Campo senha"
    })
  }

  const result = fetch(`/validar/login`,{
    method: 'POST',
    body: `email=${email}&senha=${senha}`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then((response) => response.json())
  .then((result) => {
    
    

  })
}