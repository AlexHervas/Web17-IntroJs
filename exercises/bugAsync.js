// Este programa simula una llamada asincrónica para obtener un usuario

/*
function obtenerUsuario(id) {
    let usuario;
    
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    }, 2000);
    
    return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario);
*/

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          const usuario = { id: 1, nombre: 'John Doe' };
          resolve(usuario);
        } else {
          reject('Usuario no encontrado');
        }
      }, 2000);
    });
  }
  
  async function mostrarUsuario() {
    try {
      const usuario = await obtenerUsuario(1);
      console.log(usuario);
    } catch (error) {
      console.error(error);
    }
  }
  
  mostrarUsuario();
