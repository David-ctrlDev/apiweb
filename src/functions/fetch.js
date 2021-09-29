async function apiFetch() {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Permissions-Policy': 'interest-cohort=()'
        }
    }
    const url = 'https://daviddev123.pythonanywhere.com/mas_recientes'
    const resp = await fetch(url, requestOptions)
    const data = await resp.json()

    return data
}

async function apiFetchPost(codigo, marca, nombre, precio) {


    const url = 'https://daviddev123.pythonanywhere.com/mas_recientes'
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Permissions-Policy": "interest-cohort=()"
        },
        body: JSON.stringify({
            "codigo": codigo,
            "marca": marca,
            "nombre": nombre,
            "precio": precio
        })
    };
    await fetch(url, requestOptions)

}



export { apiFetch, apiFetchPost }