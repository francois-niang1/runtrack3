function sommenombrespremiers(nb1, nb2) {

    var val1=0
    var val2=0

    for (var i = 2; i < nb1; i++){
        if(nb1 % i === 0){
            console.log('FALSE')
            break
        }
        else{
            console.log(nb1 + ' est un nombre premier')
            val1 = nb1
            for (var i = 2; i < nb2; i++){
                if(nb2 % i === 0){
                    console.log('FALSE')
                    break
                }
                else{
                    console.log(nb2 + ' est un nombre premier')
                    val2 = nb2
                    console.log(nb1 + nb2)
                }
            }
        }
    }

}

sommenombrespremiers(6, 3);