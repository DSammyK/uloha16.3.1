function pracaSCasom(){
    let dnesok = new Date();
    let narodenie = new Date(document.getElementById("datum").value);
  
    let dalsieNarodeniny = new Date(dnesok.getFullYear(), narodenie.getMonth(), narodenie.getDate());
  
    if(dnesok > dalsieNarodeniny) {
    dalsieNarodeniny.setFullYear(dnesok.getFullYear() + 1);
    }
    
    let jedenDen = 24 * 60 * 60 * 1000;
  
    let ostavajuceDni = Math.ceil((dalsieNarodeniny.getTime() - dnesok.getTime()) / (jedenDen));
    
    //zistenie mesiaca a rocne obdobie
    let mesiac = narodenie.getMonth();
    let mesiacNazov = "";

    switch (mesiac){
        case 11:
        case 0:
        case 1:
            mesiacNazov = "Zima";
            break;
        case 2:
        case 3:
        case 4:
            mesiacNazov = "Jar";
            break;
        case 5:
        case 6:
        case 7:
            mesiacNazov = "Leto";
            break;
        case 8:
        case 9:
        case 10:
            mesiacNazov = "Jesen";
            break;
    }


    document.getElementById("result").innerText = "Do najbližších narodenín ostáva "+ ostavajuceDni + " den/dni" + "\nRočné obdobie: " + mesiacNazov;

    window.alert("Do najbližších narodenín ostáva "+ ostavajuceDni + " den/dni" + "\nRočné obdobie: " + mesiacNazov)
    
    console.log("Do najbližších narodenín ostáva "+ ostavajuceDni + " den/dni" + "\nRočné obdobie: " + mesiacNazov)
}   