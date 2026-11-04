const API_URL = '/api/v1/ciudades';
const API_PROYECTOS = '/api/v1/proyectos'
const resultado = document.querySelector("#resultado");
const resultado_pro = document.querySelector("#resultado_pro");


async function solicitar_API(ruta = '', opciones = {}) {
    const respuesta = await fetch(`${API_URL}${ruta}`,
        {
            ...opciones,
            Headers: {
                'content-type': 'appliacation/json',
                ...opciones.headers,
            },
        }
    )
    const datos = respuesta.status == 204 ? null : await respuesta.json();

    return datos;

}

async function solicitar_Proyectos(ruta= '', opciones ={}) {
    const respuesta = await fetch(`${API_PROYECTOS}${ruta}`,
        {
            ...opciones,
            Headers:{
                'content-type':'appliacation/json',
                ...opciones.headers, 
            },
        }
    )
    const datos = respuesta.status == 204 ? null : await respuesta.json();

    return datos;
}


async function disp_proyectos() {

    let datos = await solicitar_Proyectos();
    let data = datos.data;


    let filas_proyectos = "";


    if (datos === null) {
        filas_proyectos += `<tr><td coldspan=3> No existen filas </td></tr>`;
    } else {
        data.forEach(element => {
            filas_proyectos += '<tr>';
            filas_proyectos += `<td>  ${element.id}  </td>`;
            filas_proyectos += `<td>  ${element.clienteId}  </td>`;
            filas_proyectos += `<td>  ${element.oficinaId}  </td>`;
            filas_proyectos += `<td>  ${element.proyecto}  </td>`;
            filas_proyectos += `<td>  ${element.fechaInicioProyecto}  </td>`;
            filas_proyectos += `<td>  ${element.fechaFinProyecto} </td>`;
            filas_proyectos += `<td>  ${element.costoProyecto}  </td>`;
            filas_proyectos += '</tr>';
        });
    }

    resultado_pro.innerHTML = filas_proyectos;

}

async function disp_ciudades() {

    let datos = await solicitar_API();
    let data = datos.data;


    let filas_ciudades = "";


    if (datos === null) {
        filas_ciudades += `<tr><td coldspan=3> No existen filas </td></tr>`;
    } else {
        data.forEach(element => {
            filas_ciudades += '<tr>';
            filas_ciudades += `<td>  ${element.id}  </td>`;
            filas_ciudades += `<td>  ${element.ciudad} </td>`;
            filas_ciudades += `<td>  ${element.pais}  </td>`;
            filas_ciudades += '</tr>';



        });
    }

    resultado.innerHTML = filas_ciudades;

}


disp_proyectos();
disp_ciudades();