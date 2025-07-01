
async function callApi(){
    let response = await fetch("https://hp-api.onrender.com/api/characters")

    if(response.status == 200 && response.ok){
        return response.json()
    }
}

async function getPotter(){

    let characters = await callApi()
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
});
    }

getPotter()

