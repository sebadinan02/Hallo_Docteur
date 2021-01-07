let checkBox = document.querySelector('#check');
checkBox.addEventListener('click', function () {
	let btn_nav =document.querySelector('#btn-nav');
	let mybody=document.querySelector('body');
	if (checkBox.checked==true) {
		btn_nav.style.left="250";
		btn_nav.style.opacity="0";
		mybody.style.overflow='hidden'
		
	} else{
		mybody.style.overflow=''
		btn_nav.style.left="0";
		btn_nav.style.opacity="";
	}
});

document.querySelector('#consuLigne').addEventListener('click',() =>{
	alert('Ce service est malheureusement inaccesible pour l\'instant. Réessayez un peu plus tard. Merci pour votre comprehension')
} )

let observerDroit = new IntersectionObserver(function (entries){
	entries.forEach(function (observable){
		if (observable.intersectionRatio > 0.3){
			observable.target.classList.remove('not-visible-droite');
			// observerDroit.unobserve(observable.target);
		}
		
	})
},{
	threshold:[0.3]
});

let parDroite = document.querySelectorAll('.actu');
parDroite.forEach(function (droite){
	droite.classList.add('not-visible-droite')
	observerDroit.observe(droite)
})

let observerGauche = new IntersectionObserver(function (entries){
	entries.forEach(function (observable){
		if (observable.intersectionRatio > 0.3){
			observable.target.classList.remove('not-visible-gauche');
			// observerGauche.unobserve(observable.target);
		}
		
	})
},{
	threshold:[0.3]
});

let parGauche = document.querySelectorAll('.info');
parGauche.forEach(function (gauche){
	gauche.classList.add('not-visible-gauche')
	observerGauche.observe(gauche)
})


let observerTop = new IntersectionObserver(function (entries){
	entries.forEach(function (observable){
		if (observable.intersectionRatio > 0.3){
			observable.target.classList.remove('not-visible-top');
			// observerTop.unobserve(observable.target);
		}
		
	})
},{
	threshold:[0.3]
});

let parTop = document.querySelectorAll('.for-top');
parTop.forEach(function (top){
	top.classList.add('not-visible-top')
	observerTop.observe(top)
})



let observerZoom = new IntersectionObserver(function (entries){
	entries.forEach(function (observable){
		if (observable.intersectionRatio > 0.5){
			observable.target.classList.remove('not-visible-zoom');
			// observerTop.unobserve(observable.target);
		}
		
	})
},{
	threshold:[0.5]
});

let parZoom = document.querySelectorAll('.bio');
parZoom.forEach(function (zoom){
	zoom.classList.add('not-visible-zoom');
	observerZoom.observe(zoom);
})

document.querySelector('#form').addEventListener('submit',() => {
		let searchValue = document.querySelector('#search').value;
		if (searchValue == 'specialites' || searchValue == 'specialite') {
		
			let choix=window.confirm('Voulez-vous être redirigé vers "Spécialités"');
			if (choix){
				window.open("pages/specialites.html");
			}
				
		} else if(searchValue == 'RDV'||searchValue == 'Prendre RDV' || searchValue=='prendre rendez-vous'){
			let choix=window.confirm('Voulez-vous être redirigé vers "Prendre RDV"');
			if (choix){
				window.open("pages/RDV.html");
			}
		}

	});




