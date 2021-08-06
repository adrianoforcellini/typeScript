interface Usuario {
    id: string,
    email: string,
}

interface Administrador extends Usuario {
    cargo: 'gerente' | 'coordenador',
}

function redirecione(usuario: Usuario | Administrador) {
    if ('cargo' in usuario) {
        //redirecione para area adm
    }
    // redirecione para area usuario
}

//-----------------------------------------------------------------//

interface IUsuario {
    id: string,
    email: string,
    cargo?: 'funcionario' | 'gerente' | 'coordenador',
}

function redirecione2(usuario: IUsuario) {
    if (usuario.cargo) {
        // redireciona para usuario.cargo
    }
    // redirecina para area usuario
}