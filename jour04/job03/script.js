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
            console.log[typePokemon]
            typeList.push(typePokemon.toString())

            
            // NewOpt.innerHTML = response[i].type
            // select.append(NewOpt)
        }

        //             /*Retirer les doublons*/

        let newList = typeList.filter(function(ele , pos){
            return typeList.indexOf(ele) == pos;
        })


        //             /*display pokemon*/
        // for (let i = 0; i < response.length ; i++ ){
        //     let NewLi = document.createElement('li')
        //     NewLi.innerHTML = response[i].name.french
        //     ul.append(NewLi)
        // }
    })
    .catch((error) => console.log(error))

})