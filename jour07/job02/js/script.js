document.addEventListener('DOMContentLoaded', (event) => {

    let text_jumbotron = document.getElementById('text-jumbotron')
    let btn_reboot = document.getElementById('reboot')
    let btn1 = document.getElementById('pagination1')
    let btn2 = document.getElementById('pagination2')
    let btn3 = document.getElementById('pagination3')
    let li1 = document.getElementById('li1')
    let li2 = document.getElementById('li2')
    let li3 = document.getElementById('li3')
    let li4 = document.getElementById('li4')
    let li5 = document.getElementById('li5')
    let li6 = document.getElementById('li6')
    let li7 = document.getElementById('li7')
    let li8 = document.getElementById('li8')
    let li9 = document.getElementById('li9')
    let li10 = document.getElementById('li10')
    let arrowL = document.getElementById('arrowL')
    let arrowR = document.getElementById('arrowR')
    let test = document.getElementById('#progress-bar')

    btn_reboot.addEventListener('click', function(){
        text_jumbotron.innerHTML = 'Chaque fois qu\'une lumière brûle deux fois plus, elle brille deux fois moins longtemps. Et vous avez brûlé on ne peut plus brillamment, Roy.'
    })

    btn1.addEventListener('click', function(){
        text_jumbotron.innerHTML = 'Il existe plusieurs viesions du terme: Le monde est la matiére, l\'espace et les phénomènes qui nous sont accessibles par les sens, l\'experience ou la raison.Le sens le pluscourant désigne notre planète, la Terre, avec ses habitans, et son environnement plus ou moins naturel.'
    })
    btn2.addEventListener('click', function(){
        text_jumbotron.innerHTML = 'Parler de paix, tout en répandant du sang, c\'est quelque chose que seuls les humains peuvent faire'
    })
    btn3.addEventListener('click', function(){
        text_jumbotron.innerHTML = 'le bouton marche gros'
    })

    arrowL.addEventListener('click', function(){
        a = document.getElementById('progress-bar').style.width
        b = a.replace('%', '');
        b -= '10';
        b = b+'%'
        document.getElementById('progress-bar').style.width = b
    })

    arrowR.addEventListener('click', function(){
        a = document.getElementById('progress-bar').style.width
        b = a.replace('%', '');
        b -= '-10';
        b = b+'%'
        document.getElementById('progress-bar').style.width = b
    })

    li1.addEventListener('click', function(){
        document.getElementById("li1").classList.add('active');
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li2.addEventListener('click', function(){
        document.getElementById("li2").classList.add('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li3.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.add('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li4.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.add('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li5.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.add('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li6.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.add('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li7.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.add('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li8.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.add('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.remove('active');
    })
    li9.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.add('active');
        document.getElementById("li10").classList.remove('active');
    })
    li10.addEventListener('click', function(){
        document.getElementById("li2").classList.remove('active');
        document.getElementById("li1").classList.remove('active');
        document.getElementById("li3").classList.remove('active');
        document.getElementById("li4").classList.remove('active');
        document.getElementById("li5").classList.remove('active');
        document.getElementById("li6").classList.remove('active');
        document.getElementById("li7").classList.remove('active');
        document.getElementById("li8").classList.remove('active');
        document.getElementById("li9").classList.remove('active');
        document.getElementById("li10").classList.add('active');
    })
})

