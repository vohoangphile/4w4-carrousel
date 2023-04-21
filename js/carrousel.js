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

    let fleche__1 = document.querySelector('.fleche__1');
    let fleche__2 = document.querySelector('.fleche__2');

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
    let position = 0; // crée l'indextation, numéroter chacun des composants du carrousel
    let index = 0; // l'image courante, POSITION ACTUELLE de l'image
    let ancienIndex = -1; // -1 ,car il n'y a pas d'image choisie pour l'instant
    function ajouter_une_image_dans_carrousel(elem) {
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
            affiche_image_carrousel()         
        })
        position = position + 1 // incrémentation de la position
        carrousel__form.append(rad)
    }   
    /**
     * Affiche la nouvelle image du carrousel
     */
    function affiche_image_carrousel() {
        if (ancienIndex != -1){
            carrousel__figure.children[ancienIndex].style.opacity = "0"
            //carrousel__figure.children[ancienIndex].classList.remove('carrousel__img--activer')
            }
            //console.log(this.dataset.index)
            carrousel__figure.children[index].style.opacity = "1" // rendre visible la nouvelle image
            // carrousel__figure.children[index].classList.add('carrousel__img--activer')
            ancienIndex = index
    }
    // function changer_image_fleche() {
        
    // }
    console.log("Voici", fleche__1);
    fleche__1.addEventListener('click', function(){
        console.log("ALAIDE");
        index = index + -1 // incrémentation de la position
    })
    fleche__2.addEventListener('click', function(){
        console.log("AYUDA");
        index = index + 1 // incrémentation de la position
    })
})()

