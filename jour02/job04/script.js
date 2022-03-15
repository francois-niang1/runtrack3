document.addEventListener('DOMContentLoaded', (event) => {
    
    var str = document.getElementById('keylogger')
    var str_temp = ''

    function updateDisplay(val) {
        str.innerHTML = val;
    }

    str.addEventListener('keypress', function keylogger(){
        str_temp = 'keypress'
        console.log(str_temp)
    })
})
