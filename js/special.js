document.querySelector('#form').addEventListener('submit',() => {
    let searchValue = document.querySelector('#search').value;
    if (searchValue == 'specialites' || searchValue == 'specialite') {
    
        let choix=window.confirm('Voulez-vous être redirigé vers "Spécialités"');
        if (choix){
            window.open("specialites.html");
        }
            
    } else if(searchValue == 'RDV'||searchValue == 'Prendre RDV' || searchValue=='prendre rendez-vous'){
        let choix=window.confirm('Voulez-vous être redirigé vers "Prendre RDV"');
        if (choix){
            window.open("RDV.html");
        }
    }

});

