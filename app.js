var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a') //formes géométriques
var links = map.querySelectorAll('.map__list a')
var imagesDiapo = new Array();
imagesDiapo[0] = "img/bretagneAccueil.jpg";
imagesDiapo[1] = "img/bretagneAccueil.jpg";
imagesDiapo[2] = "img/bretagneAccueil.jpg";



//Polyfill du foreach --> rend le forEach accessible
if (NodeList.prototype.forEach === undefined){ //si méthode forEach inexistante dans NodeList
	NodeList.prototype.forEach = function (callback){
		[].forEach.call(this, callback) //méthode forEach prend un tableau et appelle la méthode
	}
}

var activeArea = function(id){ //active un élément
	map.querySelectorAll('.is-active').forEach(function (item){ 
		item.classList.remove('is-active') //retire le is-active des éléments qui ne sont plus survolés
	})
	if (id !== undefined){
		document.querySelector('#list-' + id).classList.add('is-active') //désigne le lien actif
		document.querySelector('#area-' + id).classList.add('is-active')
	}
}

paths.forEach(function (path){ //active la zone survolée
	path.addEventListener('mouseenter', function (){
		var id = this.id.replace('area-','')
		activeArea(id)
	})
})

links.forEach(function (link){ //active le lien survolé
	link.addEventListener('mouseenter', function (){
		var id = this.id.replace('list-', '')
		activeArea(id)
	})
})

map.addEventListener('mouseover', function (){ //élément plus survolé
	activeArea()
})

	 I = 0 ;
     Imax = document.imagesDiapo.length - 1 ;
     setTimeout(suivante, 2000) ;
    
     function suivante()
     {
     document.imagesDiapo[I].style.display = "none" ;
     if ( I < Imax )
          I++;
     else
          I=0;    
     document.imagesDiapo[I].style.display = "block";
     setTimeout(suivante, 2000) ;
}
