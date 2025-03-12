import Swal from 'sweetalert2';

export function alertMessage() {
    Swal.fire({
      title: "Apunta't a la nostra Newsletter!",
      text: "Rep les millors receptes i recomanacions al teu correu 📩",
      icon: "info",
      input: "email",
      inputPlaceholder: "Introdueix el teu correu aquí...",
      confirmButtonText: "Subscriure'm",
      showCancelButton: true,
      cancelButtonText: "Cancel·lar",
      preConfirm: (email) => {
        if (!email) {
          Swal.showValidationMessage("⚠️ Has d'introduir un correu vàlid");
        } else {
          return email;
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Gràcies per subscriure't! 🎉",
          `T'hem afegit a la nostra llista amb el correu: ${result.value}`,
          "success"
        );
      }
    });    
  
}