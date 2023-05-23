function validarCheckbox() {
    let checkbox = document.getElementById("miCheckbox");
  
    if (checkbox.checked) {
      let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let codigo = "";
      for (let i = 0; i < 8; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
       
      let descuento = document.getElementById('codigoDescuento')
      descuento.innerHTML = codigo
      
     
    } else {
      alert("Para obtener un codigo de descuento debe aceptar los terminos y condiciones");
    }
  }