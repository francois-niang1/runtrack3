function afficherjourssemaines(){
    var jourssemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    var j = 0
    for (var i = 0; i < jourssemaines.length; i++){
        alert(jourssemaines[j])
        j++
    }
}

afficherjourssemaines();