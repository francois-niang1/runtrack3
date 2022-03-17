document.addEventListener('DOMContentLoaded', (event) => {

    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let btn = document.getElementById('filter')
    let select = document.querySelector('select')
    let ul = document.querySelector('ul')
    let typeList = []

    // btn.addEventListener('click', function(){
    //     alert(id)
    // })
    
    fetch ('pokemon.json')
    .then((response) => response.json())
    .then((response) => {
        // console.log(response)

                    /*display option select*/
        for (let i = 0; i < response.length ; i++ ){
            let typePokemon = response[i].type
            typeList.push(typePokemon.toString())
        }

                    /*Retirer les doublons*/
        let newList = typeList.filter(function(ele , pos){
            return typeList.indexOf(ele) == pos;
        })

                    /* Display Select no doublons */
        for (let i = 0; i < newList.length ; i++ ){
            let NewOpt = document.createElement('option')
            NewOpt.innerHTML = newList[i]
            select.append(NewOpt)
        }


                    /*display pokemon*/
        for (let i = 0; i < response.length ; i++ ){
            let NewLi = document.createElement('li')
            NewLi.innerHTML = response[i].name.french
            ul.append(NewLi)
        }
    })
    .catch((error) => console.log(error))

})