(function() {
    console.log("Début du carrousel ");
    let carrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel =  document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x')
    let carrousel__figure = document.querySelector('.carrousel__figure')
    let carrousel__form = document.querySelector('.carrousel__form');
    console.log(carrousel__form.tagName); // conteneur du radio-boutons
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');

    carrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--activer') // erreur avec un scale aussi dans le css .carrousel scale: 1
        ajouter_les_images_de_galerie()
    })
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--activer')
    })
    /**
     * Pour chaque image de la galerie l'ajouter dans le carrousel
     */
    function ajouter_les_images_de_galerie()
    {
        for(const elem of galerie__img ) {
            ajouter_une_image_dans_carrousel(elem)
            ajouter_un_radio_bouton_dans_le_carrousel()
        }
    }
    /**
     * Création dynamique d'une image pour le carrousel
     * @param {*} elem une image de la galerie
     */
    let position = 0;
    let index = 0;
    let ancienIndex = -1;
    function ajouter_une_image_dans_carrousel(elem) {
        // console.log(elem.getAttribute('src'));
            // img.classList.add()
            let img = document.createElement('img');
            img.src = elem.getAttribute('src');
            img.classList.add('carrousel__img');
            console.log(img.src);
            carrousel__figure.appendChild(img);
    }

    function ajouter_un_radio_bouton_dans_le_carrousel()
    {
        let rad = document.createElement('input')
        rad.setAttribute('type','radio')
        rad.setAttribute('name','carrousel__rad')
        rad.classList.add('carrousel__rad')
        rad.dataset.index = position
        rad.addEventListener('mousedown', function(){
            index =  this.dataset.index
            if (ancienIndex != -1){
            carrousel__figure.children[ancienIndex].style.opacity = "0"
            }
            //console.log(this.dataset.index)
            carrousel__figure.children[index].style.opacity = "1"
            ancienIndex = index
        })
        position = position + 1 // incrémentation de la position
        carrousel__form.append(rad)
    }   
})()

