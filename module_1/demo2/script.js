let sports = ["Curling", "Baseball", "Palet", "Molky"]

//créer les options en fonction du tableau
sports.forEach(function (val){

    const option = document.createElement('option')
    option.value = val.toLowerCase()
    option.innerText = val
    //option.setAttribute('id', 12)

    //ajout de l'option dans le select
    document.getElementById('selectSport').append(option)
})

//à la selection d'une option, j'affiche le sport dans une balise p
document.getElementById('selectSport').addEventListener("change", function(){
    console.log(this)
    const p = document.createElement('p')
    p.innerText = this.value
    p.style.textTransform = 'capitalize'
    document.body.append(p)
})

