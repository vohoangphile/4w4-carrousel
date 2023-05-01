<?php
/**
 * Plugin name: Carrousel Phi
 * Auteur: Le Vo Hoang Phi
 * Author URI: https://github.com/vohoangphile
 * Description: Le carrousel permettra d'afficher dans une boîte modale animée les images d'une galerie
 * Version 1.0.0 
 * */ 


 function mon_enqueue_css_js(){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");     

    wp_enqueue_style( 'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);

}

add_action('wp_enqueue_scripts', 'mon_enqueue_css_js');


function creation_carrousel()
{
    return "
    <div class='carrousel'>
    <div class='conteneur-fleche'>
    <div class='fleche__1'>&#8592;</div>
    <div class='fleche__2'>&#8594;</div>
    </div>
    <button class='carrousel__x'>X</button>
    <figure class='carrousel__figure'></figure>
    <form class='carrousel__form'></form>
    </div> <!fin du carrousel -->
    ";
}
add_shortcode('carrousel', 'creation_carrousel');








