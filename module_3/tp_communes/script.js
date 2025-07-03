const BASE_URL = "https://geo.api.gouv.fr"

//méthode générique utilisée pour tous les appels  à l'API
async function callApi(url) {

    const response = await fetch(url)

    if (response.ok) {
        //si la reponse est ok je renvoie la partie JSON de la requête
        return response.json()
    }
}


async function getDepartements() {
    //récupérère la liste des départements
    const dep = await callApi(`${BASE_URL}/departements?fields=nom,code`)
    console.log(dep)

    //on boucle sur la liste pour créer les différentes options du select
    dep.forEach(function (val) {
        const option = document.createElement('option')
        option.value = val.code
        option.innerText = `${val.code} - ${val.nom}`
        //on ajoute l'option au select
        document.getElementById('dep').append(option)
    })
}


async function getCitiesByDep(){
    //récupérère la liste des communes d'un département
    //le this représente le select sur lequel on ajoute l'évènement
    const cities = await callApi(`${BASE_URL}/departements/${this.value}/communes?fields=nom,code`)
    console.log(cities)

    document.getElementById('cities').innerHTML = '<option value="" selected disabled>- Communes -</option>'

    cities.forEach(function (val){
        const option = document.createElement('option')
        option.value = val.code
        option.innerText = val.nom
        //on ajoute l'option au select
        document.getElementById('cities').append(option)
    })


}

async function getCity(){
    //récupérère les infos d'une commune
    const city = await callApi(`${BASE_URL}/communes/${this.value}?fields=nom,population,codesPostaux`)
    console.log(city)

    const p = document.createElement('p')
    p.innerText = `Nom : ${city.nom}, Population : ${city.population}, CP : ${city.codesPostaux.join("-")}`

    document.body.append(p)
}

//initialisation de la page
window.onload = function () {
    //charger les deps
    getDepartements()
    //associer les évènements sur les select
    document.getElementById('dep').addEventListener('change', getCitiesByDep)
    document.getElementById('cities').addEventListener('change', getCity)
}


