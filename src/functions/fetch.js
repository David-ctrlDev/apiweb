async function apiFetch(id) {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Permissions-Policy': 'interest-cohort=()'
        }
    }
    const url = 'http://127.0.0.1:5000/goals/ ?id=OCPmT3IqxUOzj2L6hm8kBn1nyYg2' //`https://daviddev123.pythonanywhere.com/goals/ ?id=${id}`
    const resp = await fetch(url, requestOptions)
    const data = await resp.json()
    console.log(data)
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