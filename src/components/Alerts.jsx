import Swal from "sweetalert2";

export function swerroralert(text){
    return (
        Swal.fire({ 
            icon: 'error',  
            title: 'Oops...',  
            text
        })
    )
}

export function swsuccalert(title){
    return (
        Swal.fire({  
            position: 'top-end',  
            icon: 'success',  
            title,  
            showConfirmButton: false,  
            timer: 2500 
        })
    )
}

