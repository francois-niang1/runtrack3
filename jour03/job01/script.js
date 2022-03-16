$(document).ready(function () {

    let btn = $('#button')
    let btn2 = $('#button2')
    let p = $('p')
    // let html = $('html')
    p.hide()

    btn.click(function (){
        p.show('slow');
    })
    
    
    btn2.click(function (){
        // html.hide('slow');
        p.hide('slow');
        btn.eq(0).hide('slow');
        btn2.eq(0).hide('slow');
    })

})