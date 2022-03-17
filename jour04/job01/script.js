document.addEventListener('DOMContentLoaded', (event) => {

    let btn = document.querySelector('button')
    let txt = document.querySelector('p')

    btn.addEventListener('click', function (){
        fetch('expression.txt')
        .then((response) => response.text())
        .then((response) => txt.innerHTML = response)
        .catch((error) => console.log(error))
    })

})