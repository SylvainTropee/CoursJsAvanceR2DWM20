const BASE_URL = "https://geo.api.gouv.fr"

async function callApi(url) {

    const response = await fetch(url)

    if (response.ok) {
        return response.json()
    }
}


async function getDepartements() {

    const dep = await callApi(`${BASE_URL}/departements?fields=nom,code`)
    console.log(dep)

    dep.forEach(function (val) {
        const option = document.createElement('option')
        option.value = val.code
        option.innerText = `${val.code} - ${val.nom}`

        document.getElementById('dep').append(option)
    })
}


async function getCitiesByDep(){
    const cities = await callApi(`${BASE_URL}/departements/${this.value}/communes?fields=nom,code`)
    console.log(cities)

    document.getElementById('cities').innerHTML = '<option value="" selected disabled>- Communes -</option>'

    cities.forEach(function (val){
        const option = document.createElement('option')
        option.value = val.code
        option.innerText = val.nom
        document.getElementById('cities').append(option)
    })


}

async function getCity(){

    const city = await callApi(`${BASE_URL}/communes/${this.value}?fields=nom,population,codesPostaux`)
    console.log(city)

    const p = document.createElement('p')
    p.innerText = `Nom : ${city.nom}, Population : ${city.population}, CP : ${city.codesPostaux.join("-")}`

    document.body.append(p)
}


window.onload = function () {
    getDepartements()
    document.getElementById('dep').addEventListener('change', getCitiesByDep)
    document.getElementById('cities').addEventListener('change', getCity)
}


