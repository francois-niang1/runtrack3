document.addEventListener('DOMContentLoaded', (event) => {
    
    var str = document.getElementById('citation')
    var btn = document.getElementById('button')
    
    btn.addEventListener('click', function citation(){
        console.log(str)
    })
})
