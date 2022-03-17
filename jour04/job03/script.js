document.addEventListener('DOMContentLoaded', (event) => {

    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let btn = document.getElementById('filter')
    let select = document.querySelector('select')


    // btn.addEventListener('click', function(){
    //     alert(id)
    // })
    
    fetch ('pokemon.json')
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        for (let i = 0; i < response.length ; i++ ){
            let NewOpt = document.createElement('option')
            NewOpt.innerHTML = response[i].type
            select.append(NewOpt)
        }
    })
    .catch((error) => console.log(error))

})