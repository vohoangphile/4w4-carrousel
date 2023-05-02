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
    let galerie__menu = document.querySelector('figure');
    let fleche__1 = document.querySelector('.fleche__1');
    let fleche__2 = document.querySelector('.fleche__2');
    console.log("Tableau :", galerie__img.length);

    galerie__menu.addEventListener('mousedown', function(){
        
         console.log("touche");
        carrousel.classList.add('carrousel--activer')
        affiche_image_carrousel()
     })
  
     carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--activer')
     })
  /**
   * Pour chaque image de la galerie l'ajouter dans le carrousel
   */
  let position = 0
  let index = 0
  let ancienIndex = -1
  /* -- boucle qui permet construire le carrousel */
     for (const elem of galerie__img){
        elem.dataset.index = position //attribue une valeur à l'attribut, Cet attribut peut être utilisé plus tard pour identifier l'index de l'image sur laquelle l'utilisateur a cliqué.
        /* en cliquant sur une image de la galerie */
        elem.addEventListener('mousedown', function(e){
         console.log("click sur image", elem);
         console.log("dataset", e.target.dataset.index);
           /*
           avant d'ouvrir la boîte modale il faut vérifier si elle n'est pas déjà ouverte
           https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
           la fonction contains() vous permettra de faire cette vérification
           */
           index = e.target.dataset.index /* récupère l'index de l'image sur laquelle l'utilisateur a cliqué à partir de son attribut data-index. Cette valeur est ensuite utilisée pour afficher l'image correspondante dans la boîte modale.*/
           affiche_image_carrousel()
        })
        ajouter_une_image_dans_courrousel(elem)
        ajouter_un_radio_bouton_dans_carrousel()
     }
  
  
  /**
   * Création dynamique d'une image pour le carrousel
   * @param {*} elem une image de la galerie
   */
  function ajouter_une_image_dans_courrousel(elem)
  {
     let img = document.createElement('img')
     img.classList.add('carrousel__img')
     img.src = elem.src
     carrousel__figure.appendChild(img);
  }
  
  function ajouter_un_radio_bouton_dans_carrousel()
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
  function affiche_image_carrousel(){
   console.log("image function dans index", index);
     if (ancienIndex != -1){
      //   carrousel__figure.children[ancienIndex].style.opacity = "0" //est utilisé pour garder en mémoire l'index de l'image précédemment affichée. Cela permet de réduire l'opacité de cette image lorsqu'une nouvelle image est affichée, pour créer l'effet de transition.
   
        carrousel__figure.children[ancienIndex].classList.remove('carrousel__img--activer')
        carrousel__form.children[ancienIndex].checked = false
       }
       //console.log(this.dataset.index)
      //  carrousel__figure.children[index].style.opacity = "1" //pour sélectionner l'élément HTML correspondant à l'index donné (image du carrousel à afficher). Ensuite, on modifie le style de cet élément pour le rendre visible en changeant son opacité
      
      carrousel__figure.children[index].classList.add('carrousel__img--activer')
      carrousel__form.children[index].checked = true
       ancienIndex = index
  }
    console.log("Voici", fleche__1);
    fleche__1.addEventListener('click', function(){
        console.log("ALAIDE");
        console.log("index ancien", ancienIndex);
        index--;
        if(index == -1) {
         index = 6;
        }
         affiche_image_carrousel()
         
    })
    fleche__2.addEventListener('click', function(){
        console.log("AYUDA");
        console.log("fleche");
        console.log("index", index);
        index++; 
        if(index == 7) {
         console.log("index script", index);
         index = 1;
        }
        affiche_image_carrousel()
    })
})()

