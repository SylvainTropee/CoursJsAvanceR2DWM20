let characters = null
//appel à l'api, récupère une promise
fetch("https://hp-api.onrender.com/api/characters")
    //de la réponse j'extraie le corps de la requête (text, json)
    .then((response) => response.json())
    //je traite mes données
    .then((data) => {
        // characters = JSON.parse(data)
        characters = data
        console.log(characters)

        characters.forEach(function (val) {

            const p = document.createElement('p')
            const img = document.createElement('img')
            //nom du personnage dans le p
            p.innerText = val.name
            //source de l'image dans l'image
            img.src = val.image

            const div = document.createElement('div')
            //j'encapsule le tout dans une div
            div.append(p)
            div.append(img)
            document.body.append(div)
        })
    })


//JAMAIS !!!!!
// setTimeout(function (){
//     console.log(characters)
// }, 1000)


fetch("https://hp-api.onrender.com/api/characters", {
    method : "POST", body : JSON.stringify({name : "Michel"}) // "{name : 'Michel'}"
})
